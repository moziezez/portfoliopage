# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static personal portfolio site for "Mo Viveka" — no build step, no package manager, no framework. Open `portfolio.html` directly in a browser or serve with any static file server.

## Architecture

Three files, no dependencies beyond Google Fonts (loaded via CDN):

- [portfolio.html](portfolio.html) — single-page layout with all sections (Hero, Projects, Skills, About, Contact). Uses `data-i18n` attributes on every user-visible string as hooks for the translation system.
- [css/styles.css](css/styles.css) — all styles in one file. Theming is done via CSS custom properties on `:root` (dark, default) and `[data-theme="light"]`. Font stack: Syne (headings), DM Mono (labels/code), Outfit (body).
- [assets/main.js](assets/main.js) — all interactivity. Contains the full `i18n` object (English + German strings keyed by `data-i18n` attribute values), theme/language state persisted in `localStorage` under `mv-lang` and `mv-theme`, and an `IntersectionObserver` that triggers the skill-bar fill animation on scroll.

## Key Patterns

**Adding/editing translated text:** Every translatable element has `data-i18n="key"`. Add the key and both language strings to the `i18n` object in [assets/main.js](assets/main.js) — `en` and `de` blocks — then add the attribute to the HTML element.

**Theming:** All colors are CSS variables. Changing a color in `:root` applies to dark mode; the `[data-theme="light"]` block overrides for light mode. Never hardcode colors outside these blocks.

**Adding a project card:** Copy an existing `<article class="project-card ...">` in [portfolio.html](portfolio.html). The theme class (`cosmos`, `nano`, `organic`) controls the card's hover background texture — each has a matching `::before` rule in the CSS. Add a new class + `::before` rule for a distinct look.

**Skill bar animation:** Bars start paused (`animationPlayState: paused`) and are triggered to `running` by the `IntersectionObserver` when `.skill-bar-group` enters the viewport. The `width` is set inline via `style="width:XX%"`.
