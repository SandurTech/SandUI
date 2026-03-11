# SandUI

SandUI is the SandurTech component catalog and design-system reference site. It is built as a React 19 + TypeScript + Vite application and published as a static site to GitHub Pages.

The project serves two purposes:

- document the current SandUI component library and design language
- provide a polished internal/public reference for layouts, forms, feedback patterns, navigation, and interaction primitives

## Live Site

GitHub Pages deployment:

`https://sandurtech.github.io/SandUI/`

## Tech Stack

- React 19
- TypeScript
- Vite
- SCSS Modules
- ESLint

## What’s Included

The docs currently cover:

- foundations: design tokens, typography, keyboard key styling
- actions and inputs: buttons, text inputs, cards
- selection controls: checkboxes, radio buttons, switches
- navigation: breadcrumbs, pagination
- feedback: toast, snackbar
- overlays: modal dialogs
- utilities: badges, dividers

The docs UI also includes:

- dark and light theme support
- searchable sidebar navigation
- responsive component previews
- GitHub Pages-compatible asset and base-path handling

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm ci
```

### Start local development

```bash
npm run dev
```

Vite will start a local dev server with HMR.

### Run linting

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Package Installation Reference

The documentation examples reference the package as:

```bash
npm i @sandurtech/sandui
```

## Project Structure

```text
public/
  SandurTech-Logo-SVG.svg
  SandurTech-Logo-PNG.png
  robots.txt
  sitemap.xml

src/
  components/     Shared SandUI primitives and patterns
  docs/           Documentation sections and docs shell
  styles/         Global tokens, theme variables, and shared styling
  main.tsx        App entry
```

## Key Source Areas

- `src/docs/DocsApp.tsx`
  Main documentation shell, sidebar navigation, theme toggle, and search.
- `src/components/`
  Reusable UI primitives such as buttons, cards, inputs, feedback, modal, navigation, and selection controls.
- `src/styles/_tokens.scss`
  Core design tokens.
- `src/styles/_theme.scss`
  Theme variables for light/dark behavior.
- `vite.config.ts`
  Vite configuration, including the GitHub Pages base path.

## GitHub Pages Deployment

This repo is configured as a GitHub Pages project site, so the Vite base path is set to:

```ts
/SandUI/
```

That means all static assets and runtime routes need to resolve correctly under:

`https://sandurtech.github.io/SandUI/`

### Deployment workflow

The GitHub Actions workflow:

1. runs on pushes to `basic`
2. installs dependencies with `npm ci`
3. builds the site with `npm run build`
4. deploys the generated `dist/` output to GitHub Pages

Workflow file:

- `.github/workflows/deploy.yml`

### GitHub repository settings

In GitHub:

1. open `Settings > Pages`
2. set the source to `GitHub Actions`
3. push changes to `basic`
4. wait for the deployment workflow to complete

## Notes About Assets

Because this app is deployed under a GitHub Pages project base path, public assets should be referenced in a base-aware way when used from React components. Using `import.meta.env.BASE_URL` avoids broken images when deployed under `/SandUI/`.

## Quality Checks

Current project verification commands:

```bash
npm run lint
npm run build
```

These should pass before publishing changes.

## Historical Context

This repository previously used a Storybook-oriented deployment flow. The current branch now ships a single Vite-powered documentation application, and GitHub Pages deploys the Vite build output from `dist/` instead of `storybook-static/`.
