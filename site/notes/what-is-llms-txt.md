---
title: "What is llms.txt? A Guide for AI-Friendly Content"
description: "An explainer for the llms.txt format, with examples and practical formatting guidance."
date: 2025-08-28
tags:
  - notes
permalink: /notes/what-is-llms-txt/
layout: layouts/note.njk
---

[View this site's llms.txt](/llms.txt)

## Overview

An llms.txt file is a curated, markdown-formatted guide placed at the root of a website domain
(`https://example.com/llms.txt`). It helps Large Language Models (LLMs) quickly find your site’s most valuable,
inference-friendly content.

## Purpose

- Not a replacement or extension of `robots.txt`. It doesn’t control crawling or indexing.
- Acts as a curated map highlighting your site’s best content for inference by AI models.
- Provides direct guidance to AI, increasing the likelihood of your content being cited by AI-driven search results.

## Ideal Content for Inclusion

- Evergreen, structured, authoritative resources.
- High-value guides, detailed FAQs, resource hubs, and clearly written blog posts.
- Content demonstrating expertise, experience, authority, and trustworthiness (E-E-A-T).
- Pages structured specifically for comprehension by AI.

## Structure of llms.txt (Markdown Format)

- **Filename**: Must be exactly `llms.txt` (plural form).
- **Location**: Root directory of your domain, such as `/llms.txt`.

### Required Elements

- A single H1 heading (`#`) naming your site or project.
- A blockquote (`>`) summarizing the content that follows.

### Optional Elements (Recommended for clarity)

- Additional context or notes provided in standard Markdown paragraphs or lists.
- One or more H2 headings (`##`) categorizing your URLs clearly.
- Under each category, list URLs in Markdown link format, optionally followed by a colon and brief description:

```markdown
- [Link Title](https://example.com/url): Short description of content
```

### Special Section

You may include an `## OPTIONAL` section. URLs in this section can be skipped by AI if a shorter context is required.

## Formatting Example

```markdown
# Example.com: AI Resources and Insights

> Curated, structured content designed specifically for AI inference and citation.

This file provides clear access points to authoritative, evergreen information.

## Essential Content

- [FAQ](https://example.com/faq): Common questions clearly answered
- [AI Implementation Guide](https://example.com/resources/ai-guide): Detailed business resource for adopting AI
- [llms.txt Explained](https://example.com/blog/llms-txt-overview): Plain-language introduction to llms.txt usage

## OPTIONAL

- [Secondary Resource](https://example.com/secondary): Useful, but less critical for immediate AI inference
```

## Content Formatting Recommendations for Linked Pages

- Short, clear paragraphs.
- Explicit headings (H1-H3).
- Bullet points, numbered lists, and tables.
- Clear semantic signals, such as “Step 1” or “Key takeaway”.
- Minimal distractions, with no intrusive pop-ups or modals.

## Homepage Inclusion

- Include homepage only if it provides meaningful, structured content for inference.
- Typically, prioritize deeper, more content-rich pages over general homepage content.

## Key Takeaway

Treat llms.txt as your AI “treasure map,” directing models straight to your most valuable, inference-ready content, not
as a restrictive measure.
