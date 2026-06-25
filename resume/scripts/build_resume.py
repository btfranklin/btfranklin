from __future__ import annotations

import argparse
import html
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_DIR = SCRIPT_DIR.parent
REPO_ROOT = PROJECT_DIR.parent
SOURCE = PROJECT_DIR / "source.md"
DOCS_DIR = REPO_ROOT / "docs"
WEB_DIR = DOCS_DIR / "resume"
DOWNLOADS_DIR = DOCS_DIR / "downloads"
WEB_OUTPUT = WEB_DIR / "index.html"
DOCX_OUTPUT = DOWNLOADS_DIR / "bt-franklin-resume.docx"
PDF_OUTPUT = DOWNLOADS_DIR / "bt-franklin-resume.pdf"
BODY_FONT = "Helvetica Neue"
BODY_COLOR = RGBColor(0x0C, 0x0C, 0x0C)
LINK_COLOR = RGBColor(0x05, 0x63, 0xC1)
SECTION_SIZES = {
    "Core Expertise": 12,
    "Additional Experience": 13,
}


class BuildError(RuntimeError):
    pass


def require_tool(name: str) -> str:
    tool = shutil.which(name)
    if tool is None:
        raise BuildError(f"Required command not found: {name}")
    return tool


def run(command: list[str], *, cwd: Path | None = None, capture: bool = False) -> str:
    result = subprocess.run(
        command,
        cwd=cwd,
        check=False,
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.PIPE,
        text=True,
    )
    if result.returncode != 0:
        stderr = result.stderr.strip()
        raise BuildError(f"Command failed: {' '.join(command)}\n{stderr}")
    return result.stdout if capture else ""


def parse_frontmatter(source: str) -> tuple[dict[str, str], str]:
    if not source.startswith("---\n"):
        return {}, source

    end = source.find("\n---\n", 4)
    if end == -1:
        raise BuildError("Opening frontmatter marker found without closing marker.")

    frontmatter = source[4:end]
    body = source[end + len("\n---\n") :]
    metadata: dict[str, str] = {}
    for line in frontmatter.splitlines():
        if not line.strip():
            continue
        key, separator, value = line.partition(":")
        if not separator:
            raise BuildError(f"Unsupported frontmatter line: {line}")
        metadata[key.strip()] = value.strip().strip('"').strip("'")
    return metadata, body


def set_run_font(run, *, size: int = 12, bold: bool | None = None, italic: bool | None = None) -> None:
    run.font.name = BODY_FONT
    run._element.rPr.rFonts.set(qn("w:eastAsia"), BODY_FONT)
    run.font.size = Pt(size)
    run.font.color.rgb = BODY_COLOR
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic


def set_paragraph_spacing(paragraph, *, before: int = 0, after: int = 8) -> None:
    paragraph.paragraph_format.space_before = Pt(before)
    paragraph.paragraph_format.space_after = Pt(after)


def add_hyperlink(paragraph, text: str, url: str) -> None:
    part = paragraph.part
    relationship_id = part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )

    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), relationship_id)

    run = OxmlElement("w:r")
    run_properties = OxmlElement("w:rPr")

    color = OxmlElement("w:color")
    color.set(qn("w:val"), "0563C1")
    run_properties.append(color)

    fonts = OxmlElement("w:rFonts")
    fonts.set(qn("w:ascii"), BODY_FONT)
    fonts.set(qn("w:hAnsi"), BODY_FONT)
    fonts.set(qn("w:eastAsia"), BODY_FONT)
    run_properties.append(fonts)

    size = OxmlElement("w:sz")
    size.set(qn("w:val"), "24")
    run_properties.append(size)

    text_element = OxmlElement("w:t")
    text_element.text = text
    run.append(run_properties)
    run.append(text_element)
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


def clean_inline(text: str) -> str:
    return text.replace("\\", "").strip()


def add_markdown_runs(paragraph, text: str, *, default_italic: bool = False) -> None:
    text = clean_inline(text)
    pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|<([^>]+)>")
    position = 0
    for match in pattern.finditer(text):
        if match.start() > position:
            run = paragraph.add_run(text[position : match.start()])
            set_run_font(run, italic=default_italic)
        if match.group(1) is not None:
            add_hyperlink(paragraph, match.group(1), match.group(2))
        elif match.group(3) is not None:
            run = paragraph.add_run(match.group(3))
            set_run_font(run, bold=True, italic=default_italic)
        elif match.group(4) is not None:
            run = paragraph.add_run(match.group(4))
            set_run_font(run, italic=True)
        elif match.group(5) is not None:
            value = match.group(5)
            url = f"mailto:{value}" if "@" in value and not value.startswith("mailto:") else value
            add_hyperlink(paragraph, value.removeprefix("mailto:"), url)
        position = match.end()
    if position < len(text):
        run = paragraph.add_run(text[position:])
        set_run_font(run, italic=default_italic)


def parse_markdown_blocks(body: str) -> list[tuple[str, int | None, str]]:
    lines = body.splitlines()
    blocks: list[tuple[str, int | None, str]] = []
    index = 0
    while index < len(lines):
        line = lines[index]
        if not line.strip():
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.+)$", line)
        if heading:
            blocks.append(("heading", len(heading.group(1)), heading.group(2).strip()))
            index += 1
            continue

        if line.startswith("- "):
            item = line[2:].strip()
            index += 1
            while index < len(lines) and lines[index].startswith("  "):
                item += " " + lines[index].strip()
                index += 1
            blocks.append(("bullet", None, item))
            continue

        parts = [line.strip()]
        index += 1
        while index < len(lines):
            next_line = lines[index]
            if not next_line.strip() or next_line.startswith("- ") or re.match(r"^(#{1,6})\s+", next_line):
                break
            parts.append(next_line.strip())
            index += 1
        blocks.append(("paragraph", None, " ".join(parts)))
    return blocks


def add_normal_paragraph(document: Document, text: str, *, before: int = 0, after: int = 8) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph, before=before, after=after)
    add_markdown_runs(paragraph, text)


def add_bullet(document: Document, text: str, *, before: int = 0, after: int = 8) -> None:
    paragraph = document.add_paragraph(style="List Bullet")
    set_paragraph_spacing(paragraph, before=before, after=after)
    add_markdown_runs(paragraph, text)


def add_section_heading(document: Document, text: str, *, before: int = 16) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph, before=before, after=8)
    run = paragraph.add_run(text)
    set_run_font(run, size=SECTION_SIZES.get(text, 16), bold=True)


def add_bold_heading(document: Document, text: str, *, before: int = 0, after: int = 8) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph, before=before, after=after)
    run = paragraph.add_run(text)
    set_run_font(run, bold=True)


def add_role_paragraph(document: Document, title: str, dates: str) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph)
    title_run = paragraph.add_run(title)
    set_run_font(title_run, italic=True)
    paragraph.add_run().add_break()
    date_run = paragraph.add_run(dates)
    set_run_font(date_run, italic=True)


def add_product_heading(document: Document, name: str, detail: str) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph)
    name_run = paragraph.add_run(name)
    set_run_font(name_run, bold=True)
    separator = paragraph.add_run(" - ")
    set_run_font(separator)
    detail_run = paragraph.add_run(detail)
    set_run_font(detail_run, italic=True)


def add_education_heading(document: Document, school: str, degree: str, minor: str) -> None:
    paragraph = document.add_paragraph()
    set_paragraph_spacing(paragraph)
    school_run = paragraph.add_run(school)
    set_run_font(school_run, bold=True)
    paragraph.add_run().add_break()
    degree_run = paragraph.add_run(degree)
    set_run_font(degree_run)
    paragraph.add_run().add_break()
    minor_run = paragraph.add_run(minor)
    set_run_font(minor_run)


def add_contact_header(document: Document, blocks: list[tuple[str, int | None, str]]) -> int:
    name = blocks[0][2]
    city = blocks[1][2]
    headline = blocks[2][2]
    contact = blocks[3][2]
    links = blocks[4][2]

    paragraph = document.add_paragraph()
    paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
    set_paragraph_spacing(paragraph, after=24)

    run = paragraph.add_run(name)
    set_run_font(run, bold=True)
    paragraph.add_run().add_break()

    run = paragraph.add_run(city)
    set_run_font(run)
    paragraph.add_run().add_break()

    run = paragraph.add_run(headline)
    set_run_font(run)
    paragraph.add_run().add_break()

    phone, email_text = [part.strip() for part in contact.split("|", 1)]
    run = paragraph.add_run(f"{phone} | ")
    set_run_font(run)
    add_markdown_runs(paragraph, email_text)
    paragraph.add_run().add_break()

    link_matches = re.findall(r"\[([^\]]+)\]\(([^)]+)\)", links)
    for idx, (label, url) in enumerate(link_matches):
        if idx:
            run = paragraph.add_run(" \u2022 ")
            set_run_font(run)
        add_hyperlink(paragraph, label, url)

    return 5


def build_styled_docx(body: str) -> None:
    blocks = parse_markdown_blocks(body)
    if len(blocks) < 5:
        raise BuildError("Resume source is missing the expected header blocks.")

    document = Document()
    section = document.sections[0]
    for margin in ["top_margin", "right_margin", "bottom_margin", "left_margin"]:
        setattr(section, margin, Inches(0.7875))

    normal_style = document.styles["Normal"]
    normal_style.font.name = BODY_FONT
    normal_style._element.rPr.rFonts.set(qn("w:eastAsia"), BODY_FONT)
    normal_style.font.size = Pt(12)
    normal_style.font.color.rgb = BODY_COLOR

    index = add_contact_header(document, blocks)
    current_section = ""
    while index < len(blocks):
        kind, level, text = blocks[index]
        if kind == "heading" and level == 2:
            current_section = text
            add_section_heading(document, text, before=0 if text == "Professional Summary" else 16)
            index += 1
            continue
        if kind == "heading" and level == 3 and current_section == "Selected Founder-Led AI Products":
            detail = blocks[index + 1][2] if index + 1 < len(blocks) else ""
            add_product_heading(document, text, detail)
            index += 2
            continue
        if kind == "heading" and level == 3 and current_section == "Education":
            degree = blocks[index + 1][2] if index + 1 < len(blocks) else ""
            minor = blocks[index + 2][2] if index + 2 < len(blocks) else ""
            add_education_heading(document, text, degree, minor)
            index += 3
            continue
        if kind == "heading" and level == 3:
            add_bold_heading(document, text)
            index += 1
            continue
        if kind == "heading" and level == 4:
            dates = blocks[index + 1][2] if index + 1 < len(blocks) else ""
            add_role_paragraph(document, text, dates)
            index += 2
            continue
        if kind == "bullet":
            add_bullet(document, text)
            index += 1
            continue
        if kind == "paragraph":
            add_normal_paragraph(document, text)
            index += 1
            continue
        index += 1

    document.save(DOCX_OUTPUT)


def convert_markdown_to_html() -> tuple[dict[str, str], str]:
    source = SOURCE.read_text(encoding="utf-8")
    metadata, _body = parse_frontmatter(source)
    body_html = run(
        [
            "pandoc",
            str(SOURCE),
            "--from=gfm+yaml_metadata_block",
            "--to=html",
        ],
        capture=True,
    ).strip()
    return metadata, body_html


def render_web_page(metadata: dict[str, str], body_html: str) -> str:
    title = metadata.get("title", "B.T. Franklin Resume")
    last_updated = metadata.get("last_updated")
    updated_html = ""
    if last_updated:
        updated_html = (
            f'<p class="mt-3 text-sm font-mono text-zinc-500 dark:text-zinc-400">'
            f"Last updated {html.escape(last_updated)}</p>"
        )

    page_title = html.escape(title)
    content_classes = " ".join(
        [
            "space-y-5",
            "text-zinc-700",
            "dark:text-zinc-300",
            "leading-relaxed",
            "[&_h1]:font-mono",
            "[&_h1]:text-4xl",
            "[&_h1]:font-bold",
            "[&_h1]:text-zinc-950",
            "dark:[&_h1]:text-white",
            "[&_h2]:pt-6",
            "[&_h2]:font-mono",
            "[&_h2]:text-2xl",
            "[&_h2]:font-bold",
            "[&_h2]:text-cyan-600",
            "dark:[&_h2]:text-cyan-300",
            "[&_h3]:pt-4",
            "[&_h3]:font-mono",
            "[&_h3]:text-xl",
            "[&_h3]:font-semibold",
            "[&_h3]:text-zinc-900",
            "dark:[&_h3]:text-zinc-100",
            "[&_h4]:pt-3",
            "[&_h4]:font-semibold",
            "[&_h4]:text-zinc-900",
            "dark:[&_h4]:text-zinc-100",
            "[&_ul]:list-disc",
            "[&_ul]:space-y-2",
            "[&_ul]:pl-6",
            "[&_a]:text-cyan-700",
            "dark:[&_a]:text-cyan-300",
            "[&_a]:underline",
            "[&_strong]:text-zinc-900",
            "dark:[&_strong]:text-zinc-100",
        ]
    )

    return f"""<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{page_title}</title>
    <meta name="description"
        content="Resume for B.T. Franklin, applied AI technical lead and software architect." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&amp;family=JetBrains+Mono:wght@400;700&amp;display=swap"
        rel="stylesheet">
    <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
    <link href="../styles.min.css" rel="stylesheet" />
</head>

<body
    class="bg-zinc-50 dark:bg-gray-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased selection:bg-cyan-500 selection:text-white">

    <div id="circuitContainer" class="fixed inset-0 z-[-1] pointer-events-none opacity-40 dark:opacity-30">
        <canvas id="circuitCanvas" class="w-full h-full"></canvas>
    </div>
    <script async defer src="../circuits.js"></script>

    <div class="relative min-h-screen flex flex-col">
        <header
            class="sticky top-0 z-20 border-b border-zinc-200/60 dark:border-zinc-800/70 bg-zinc-50/80 dark:bg-gray-950/75 backdrop-blur-md">
            <div
                class="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <a href="../index.html" class="font-mono text-sm md:text-base font-bold uppercase tracking-wider">
                    B.T. Franklin
                </a>
                <nav
                    class="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-mono uppercase tracking-wider">
                    <a href="../index.html"
                        class="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Projects</a>
                    <a href="../creations.html"
                        class="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Creations</a>
                    <a href="../notes.html"
                        class="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">Notes</a>
                    <a href="../about.html"
                        class="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">About Me</a>
                    <a href="./" class="text-cyan-600 dark:text-cyan-300">Resume</a>
                </nav>
            </div>
        </header>

        <main class="container mx-auto px-4 pt-10 pb-12 flex-grow">
            <section
                class="border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-gray-900/75 backdrop-blur-sm rounded-lg shadow-2xl">
                <div class="border-b border-zinc-200 dark:border-zinc-800 p-6 md:p-8">
                    <p class="font-mono text-sm uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
                        Resume
                    </p>
                    {updated_html}
                    <div class="mt-6 flex flex-wrap gap-3">
                        <a href="../downloads/bt-franklin-resume.pdf"
                            class="inline-flex items-center rounded-md border border-cyan-500 px-4 py-2 text-sm font-mono text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500 hover:text-white transition-colors">
                            Download PDF
                        </a>
                        <a href="../downloads/bt-franklin-resume.docx"
                            class="inline-flex items-center rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                            Download DOCX
                        </a>
                    </div>
                </div>
                <article class="p-6 md:p-8">
                    <div class="{content_classes}">
{body_html}
                    </div>
                </article>
            </section>
        </main>
    </div>
</body>

</html>
"""


def build_docx() -> None:
    _metadata, body = parse_frontmatter(SOURCE.read_text(encoding="utf-8"))
    build_styled_docx(body)


def build_pdf() -> None:
    with tempfile.TemporaryDirectory(prefix="btfranklin-lo-") as profile_dir:
        run(
            [
                "soffice",
                f"-env:UserInstallation=file://{profile_dir}",
                "--headless",
                "--convert-to",
                "pdf",
                "--outdir",
                str(DOWNLOADS_DIR),
                str(DOCX_OUTPUT),
            ]
        )


def validate_outputs() -> None:
    for output in [WEB_OUTPUT, DOCX_OUTPUT, PDF_OUTPUT]:
        if not output.exists():
            raise BuildError(f"Expected output was not created: {output}")
        if output.stat().st_size == 0:
            raise BuildError(f"Expected output is empty: {output}")


def build() -> None:
    require_tool("pandoc")
    require_tool("soffice")
    if not SOURCE.exists():
        raise BuildError(f"Resume source not found: {SOURCE}")

    WEB_DIR.mkdir(parents=True, exist_ok=True)
    DOWNLOADS_DIR.mkdir(parents=True, exist_ok=True)

    metadata, body_html = convert_markdown_to_html()
    WEB_OUTPUT.write_text(render_web_page(metadata, body_html), encoding="utf-8")
    build_docx()
    build_pdf()
    validate_outputs()


def main() -> int:
    parser = argparse.ArgumentParser(description="Build resume web, DOCX, and PDF outputs.")
    parser.add_argument("--check", action="store_true", help="Build and verify expected outputs.")
    parser.parse_args()

    try:
        build()
    except BuildError as error:
        print(error, file=sys.stderr)
        return 1

    print(f"Wrote {WEB_OUTPUT.relative_to(REPO_ROOT)}")
    print(f"Wrote {DOCX_OUTPUT.relative_to(REPO_ROOT)}")
    print(f"Wrote {PDF_OUTPUT.relative_to(REPO_ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
