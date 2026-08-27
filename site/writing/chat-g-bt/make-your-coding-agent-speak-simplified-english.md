---
title: "Make Your Coding Agent Speak Simplified English"
description: "A simple instruction based on ASD-STE100 can make coding-agent explanations clearer and easier to read."
date: 2026-08-26
tags:
  - writing
  - chat-g-bt
permalink: /writing/chat-g-bt/make-your-coding-agent-speak-simplified-english/
layout: layouts/article.njk
navKey: writing
sectionLabel: Chat G B.T.
sectionUrl: /writing/chat-g-bt/
---

Getting tired of your very smart coding agent explaining simple things in exhausting language?

Sick of convoluted wording that you have to read three times?

I’m about to change your life. :)

Let me introduce you to <a href="https://www.asd-ste100.org/" rel="noopener noreferrer"
title="Learn about ASD-STE100 Simplified Technical English">ASD-STE100 Simplified Technical English</a>.

It was originally developed for aerospace documentation, where unclear language can cause real problems. It uses clear writing rules and a controlled vocabulary of approximately 900 approved general words. Necessary technical terms are still permitted.

The goal is simple: Say exactly what you mean. Use short sentences. Use consistent terms. Do not make the reader decode clever metaphors or trendy jargon.

No metaphorical “load-bearing.” No “worth stating plainly” before a routine observation. No “the real tension” when you mean “the trade-off.”

Just tell me what the code does.

Here is a deliberately Claude-ish example:

> The configuration boundary is load-bearing here. The real tension is between local flexibility and system-wide consistency. It is worth stating plainly that centralization is the right move.

Here is the same idea in simpler language:

> The application keeps its settings in one file. All components read that file. This keeps the settings consistent and makes them easier to change.

For me, this has been a *huge* improvement during complex project work. I already have to understand the architecture, requirements, risks, and code. I do not also want to translate the agent’s explanation into normal human thought.

Add this to your Codex Personalization settings, your project instructions, or the equivalent area in another coding agent:

```markdown
## Communication Style

- When writing a message to the user, always use ASD-STE100 Simplified Technical English.
- When writing a README, architectural document, code comment, or other technical document, always use ASD-STE100 Simplified Technical English.
- For non-technical documents and creative writing, use normal English as appropriate for the reader.
```

Now look. This is not a cure-all. The agent will not follow every STE rule perfectly, and it can still produce a long answer when the subject requires one.

But it does move the needle.

The answers are clearer, more direct, and much easier to tolerate when the agent needs to explain how something complicated works.

Give it a try and tell me what you think.
