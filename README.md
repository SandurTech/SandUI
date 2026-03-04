<p align="center">
  <strong>SandUI</strong><br/>
  The design system powering the SandurTech ecosystem.
</p>

---

## Overview

SandUI is a modern, Inter-font based React component library built for consistency across every SandurTech microservice. It follows the **Atomic Design** methodology — organizing components from Atoms to Templates — and ships with a comprehensive Storybook for documentation and visual testing.

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18+ |
| **Build Tool** | Vite 7 |
| **Styling** | SCSS Modules |
| **Documentation** | Storybook 8 |
| **Architecture** | Atomic Design |
| **Typography** | Inter (Google Fonts) |
| **Icons** | Material Symbols Rounded |
| **CI/CD** | GitHub Actions → GitHub Pages |

## Getting Started

```bash
# Install
npm install @sandurtech/sandui

# Development
npm run dev

# Build library
npm run build

# Run Storybook
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

## Component Inventory

| Layer | Components |
|---|---|
| **Atoms** | `SandButton`, `SandLink`, `SandBadge`, `SandIcon` |
| **Molecules** | `SandInputGroup`, `SandCard`, `SandToast`, `SandBox` |
| **Organisms** | `SandNavbar`, `SandSidebar`, `SandFooter` |
| **Templates** | `StandardLayout`, `AuthLayout` |
| **Context** | `SandThemeProvider`, `useSandTheme` |

## Usage

```jsx
import { SandButton, SandCard, SandThemeProvider } from '@sandurtech/sandui';

function App() {
  return (
    <SandThemeProvider>
      <SandCard>
        <h2>Welcome</h2>
        <SandButton variant="primary">Get Started</SandButton>
      </SandCard>
    </SandThemeProvider>
  );
}
```

## Design Tokens

- **Colors**: Primary `#262626`, Accent `orange`, Background `#F2F2F2`
- **Spacing**: Strict 8px grid (`8, 16, 24, 32, 40, 48`)
- **Radius**: `4px`, `6px`, `8px`, `12px`, `9999px`
- **Shadows**: `sm`, `md`, `lg` + `glow`
- **Fonts**: Inter (body), Outfit (display)

## Keywords

React 18, Vite, SCSS Modules, Design System, Atomic Design, Component Library, UI Kit, Storybook, Material Icons, Inter Font, SandurTech, GitHub Pages, Glassmorphism, Theme System, Dark Mode, Light Mode

## License

MIT — Built by [Amogha Raj Sandur](https://www.linkedin.com/in/amogharajsandur/) | [SandurTech](https://sandurtech.vercel.app)
