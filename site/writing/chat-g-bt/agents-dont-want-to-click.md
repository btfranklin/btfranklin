---
title: "Agents Don’t Want to Click"
description: "WebMCP could give websites a second interface built for AI agents instead of human interaction patterns."
date: 2026-08-25
tags:
  - writing
  - chat-g-bt
permalink: /writing/chat-g-bt/agents-dont-want-to-click/
layout: layouts/article.njk
navKey: writing
sectionLabel: Chat G B.T.
sectionUrl: /writing/chat-g-bt/
---

Codex recently added support for WebMCP, and I had to have a little chat with my own AI to actually understand what that even means. 😅

The simple version is that a website can now tell Codex, “Here are the actions I know how to perform,” instead of making Codex click around the page like a human.

I think I posted about a year ago about the idea that websites and UIs have been designed around *human* perceptions and interaction patterns. Think about how we perceive color, or even the concept of “pressing a button,” which we know from the physical world. Agents might need a totally different way to interact with the web.

This might be it.

## So What Is WebMCP?

WebMCP tools are discovered by the built-in browser and made available to Codex automatically. There’s no separate MCP server to install or configure. Open the page, and its tools become available. Leave the page, and they go away.

Imagine an online project tracker. Today, Codex might need to find the “New issue” button, click it, locate each field, fill everything in, and submit the form. With WebMCP, the site could expose a `create_issue` tool with fields for the title, description, and priority. Same result, but the second path speaks the agent’s language.

It’s less like connecting Codex to a new service and more like giving a website a second interface...one designed for AI agents.

Agents don't want to click. They want to call tools!

This doesn’t mean the human interface goes away. It means the site can have a human interface and an agent interface backed by the same application and the same signed-in session.

WebMCP is still early, but it feels like a clear move toward a web with three distinct interaction modes: desktop, mobile, and agentic.
