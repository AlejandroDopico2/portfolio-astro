# AGENTS.md

## Project

Personal portfolio and website for `dopico.dev`.

The site represents Alejandro Dopico as an AI researcher, software developer, and PhD researcher. It should evolve over time as a long-term personal website, portfolio, research page, and technical blog.

## Goals

Build a website that is:

* Personal, professional, and technically credible.
* Modern and minimal, but not generic.
* Editorial in its visual language, with a subtle technical/engineering character.
* Easy to maintain and extend.
* Content-driven and editable primarily through Markdown/MDX and structured data.
* Suitable for research, publications, projects, repositories, teaching, CV, and technical notes.
* Easy for both the owner and future AI coding agents to understand and modify.

## Stack

Prefer a simple static architecture based on:

* Astro
* TypeScript
* Markdown / MDX
* Astro Content Collections or the current equivalent
* CSS, with Tailwind when it genuinely simplifies development
* GitHub Pages
* GitHub Actions for deployment

Avoid adding frameworks, libraries, services, or infrastructure unless there is a clear need.

## Architecture principles

Keep a strict separation between:

1. Content
2. Data and configuration
3. Components
4. Layouts
5. Pages
6. Styles

Content should not contain presentation logic.

Reusable visual patterns should be implemented as components rather than duplicated across pages.

Global design decisions should be centralized whenever practical, especially typography, colors, spacing, layout constraints, and navigation.

Prefer explicit and conventional project structure over clever abstractions.

Do not over-engineer the site.

## Content

Use structured content wherever appropriate.

Publications, projects, teaching, blog/notes, and similar entities should be represented as structured content with validated frontmatter/schema where useful.

Pages should derive their content from these sources instead of duplicating information manually.

The content model should remain flexible enough to evolve as the website grows.

## Visual direction

The desired visual identity is:

> Technical editorial, personal, and understated.

The website should feel like a carefully designed personal site belonging to an engineer/researcher.

Prioritize:

* Typography
* Whitespace
* Hierarchy
* Grid and alignment
* Subtle borders and separators
* A restrained color palette
* Small technical/editorial details
* Strong readability

Avoid visual trends that make the site look like a generic AI-generated or "vibe-coded" portfolio.

Avoid, unless there is a strong reason:

* Excessive gradients
* Glow effects
* Glassmorphism
* Decorative AI imagery
* Particle backgrounds
* Excessive animations
* Excessive rounded cards
* Generic SaaS-style sections
* Large collections of badges
* Unnecessary visual effects

Animations should be subtle and purposeful.

The site should feel distinctive through design decisions, not through visual noise.

## Design system

Use centralized design tokens or equivalent mechanisms for major visual decisions.

Changing the site's visual identity should require changing a small number of well-defined values rather than editing many unrelated files.

Support light and dark themes from the beginning, while keeping both coherent with the same visual identity.

## Homepage

The homepage should communicate three things quickly:

1. Who Alejandro is.
2. What he works on.
3. What he has built or researched.

The homepage should not simply reproduce a CV.

It should balance research, engineering, and personality.

It may evolve over time and should not assume a large amount of content.

## Research and projects

Publications should have strong visual presence without looking like a traditional academic CV.

Projects should communicate both the idea and the technical work behind them.

Use cards, lists, images, or other patterns only when they improve hierarchy or usability. Do not introduce cards simply because portfolios commonly use them.

## Blog / notes

The website should support technical writing and more personal project notes.

Writing does not need to be overly formal or academic.

The system should make publishing a new article as simple as creating a Markdown/MDX file.

## Maintainability

Optimize for a future developer, including an AI coding agent, being able to understand the project quickly.

When making changes:

* Prefer small, local changes.
* Reuse existing patterns.
* Avoid unnecessary dependencies.
* Keep naming clear and consistent.
* Do not duplicate styles or content.
* Update documentation when an architectural decision changes.
* Do not introduce abstractions without a concrete use case.

Before adding a new library or architectural layer, consider whether Astro, TypeScript, CSS, or an existing component can already solve the problem.

## Development philosophy

Build incrementally.

Do not implement the entire website in one step.

When introducing a new part of the site:

1. Understand the existing architecture.
2. Make the smallest coherent change.
3. Verify that it works.
4. Keep the result easy to modify later.

When there are multiple reasonable design options, prefer the simpler one unless the more complex option provides a clear benefit.

The website is a long-term project. Optimize for clarity, maintainability, and evolution rather than completing the maximum number of features as quickly as possible.

## Current design direction

The current direction is a softened combination of:

* Technical/editorial layouts
* Personal portfolio aesthetics
* Strong typography
* Restrained navy-based accent color
* Sans-serif typography with selective monospace details
* Minimal and subtle interaction
* Clean layouts with personality

These are design guidelines, not rigid requirements. Future improvements may refine or replace individual choices while preserving the overall character of the site.
# AGENTS.md

## Project

Personal portfolio and website for `dopico.dev`.

The site represents Alejandro Dopico as an AI researcher, software developer, and PhD researcher. It should evolve over time as a long-term personal website, portfolio, research page, and technical blog.

## Goals

Build a website that is:

* Personal, professional, and technically credible.
* Modern and minimal, but not generic.
* Editorial in its visual language, with a subtle technical/engineering character.
* Easy to maintain and extend.
* Content-driven and editable primarily through Markdown/MDX and structured data.
* Suitable for research, publications, projects, repositories, teaching, CV, and technical notes.
* Easy for both the owner and future AI coding agents to understand and modify.

## Stack

Prefer a simple static architecture based on:

* Astro
* TypeScript
* Markdown / MDX
* Astro Content Collections or the current equivalent
* CSS, with Tailwind when it genuinely simplifies development
* GitHub Pages
* GitHub Actions for deployment

Avoid adding frameworks, libraries, services, or infrastructure unless there is a clear need.

## Architecture principles

Keep a strict separation between:

1. Content
2. Data and configuration
3. Components
4. Layouts
5. Pages
6. Styles

Content should not contain presentation logic.

Reusable visual patterns should be implemented as components rather than duplicated across pages.

Global design decisions should be centralized whenever practical, especially typography, colors, spacing, layout constraints, and navigation.

Prefer explicit and conventional project structure over clever abstractions.

Do not over-engineer the site.

## Content

Use structured content wherever appropriate.

Publications, projects, teaching, blog/notes, and similar entities should be represented as structured content with validated frontmatter/schema where useful.

Pages should derive their content from these sources instead of duplicating information manually.

The content model should remain flexible enough to evolve as the website grows.

## Visual direction

The desired visual identity is:

> Technical editorial, personal, and understated.

The website should feel like a carefully designed personal site belonging to an engineer/researcher.

Prioritize:

* Typography
* Whitespace
* Hierarchy
* Grid and alignment
* Subtle borders and separators
* A restrained color palette
* Small technical/editorial details
* Strong readability

Avoid visual trends that make the site look like a generic AI-generated or "vibe-coded" portfolio.

Avoid, unless there is a strong reason:

* Excessive gradients
* Glow effects
* Glassmorphism
* Decorative AI imagery
* Particle backgrounds
* Excessive animations
* Excessive rounded cards
* Generic SaaS-style sections
* Large collections of badges
* Unnecessary visual effects

Animations should be subtle and purposeful.

The site should feel distinctive through design decisions, not through visual noise.

## Design system

Use centralized design tokens or equivalent mechanisms for major visual decisions.

Changing the site's visual identity should require changing a small number of well-defined values rather than editing many unrelated files.

Support light and dark themes from the beginning, while keeping both coherent with the same visual identity.

## Homepage

The homepage should communicate three things quickly:

1. Who Alejandro is.
2. What he works on.
3. What he has built or researched.

The homepage should not simply reproduce a CV.

It should balance research, engineering, and personality.

It may evolve over time and should not assume a large amount of content.

## Research and projects

Publications should have strong visual presence without looking like a traditional academic CV.

Projects should communicate both the idea and the technical work behind them.

Use cards, lists, images, or other patterns only when they improve hierarchy or usability. Do not introduce cards simply because portfolios commonly use them.

## Blog / notes

The website should support technical writing and more personal project notes.

Writing does not need to be overly formal or academic.

The system should make publishing a new article as simple as creating a Markdown/MDX file.

## Maintainability

Optimize for a future developer, including an AI coding agent, being able to understand the project quickly.

When making changes:

* Prefer small, local changes.
* Reuse existing patterns.
* Avoid unnecessary dependencies.
* Keep naming clear and consistent.
* Do not duplicate styles or content.
* Update documentation when an architectural decision changes.
* Do not introduce abstractions without a concrete use case.

Before adding a new library or architectural layer, consider whether Astro, TypeScript, CSS, or an existing component can already solve the problem.

## Development philosophy

Build incrementally.

Do not implement the entire website in one step.

When introducing a new part of the site:

1. Understand the existing architecture.
2. Make the smallest coherent change.
3. Verify that it works.
4. Keep the result easy to modify later.

When there are multiple reasonable design options, prefer the simpler one unless the more complex option provides a clear benefit.

The website is a long-term project. Optimize for clarity, maintainability, and evolution rather than completing the maximum number of features as quickly as possible.

## Current design direction

The current direction is a softened combination of:

* Technical/editorial layouts
* Personal portfolio aesthetics
* Strong typography
* Restrained navy-based accent color
* Sans-serif typography with selective monospace details
* Minimal and subtle interaction
* Clean layouts with personality

These are design guidelines, not rigid requirements. Future improvements may refine or replace individual choices while preserving the overall character of the site.
