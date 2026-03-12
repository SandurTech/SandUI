# SandUI

<div align="center">
  <img src="public/SandurTech-Logo-SVG.svg" alt="SandUI Logo" width="120" />
  <p><strong>A high-performance, accessible React component library and Design System for SandurTech — featuring WAI-ARIA compliance, native dark mode, and TypeScript-first components.</strong></p>

  [![npm version](https://img.shields.io/npm/v/@sandurtech/sandui.svg?style=flat-classic)](https://www.npmjs.com/package/@sandurtech/sandui)
  [![License](https://img.shields.io/npm/l/@sandurtech/sandui.svg?style=flat-classic)](LICENSE)
  [![Types](https://img.shields.io/npm/types/@sandurtech/sandui?style=flat-classic)](https://www.typescriptlang.org/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat-classic)](https://github.com/sandurtech/sandui/pulls)
</div>

---

## ✨ Features

- ♿ **WAI-ARIA Compliant**: Built with accessibility as a first-class citizen.
- 🌓 **Native Dark Mode**: Seamless theme switching with strictly derived design tokens.
- ⚡ **Zero Lucide Dependency**: Utilizes Google Material Symbols (Rounded) for a lean bundle.
- 📘 **TypeScript First**: Full IntelliSense support with comprehensive JSDoc documentation.
- 🎨 **Modern Aesthetics**: Premium, high-performance UI primitives tailored for SaaS and dashboards.
- 📱 **Fully Responsive**: Mobile-optimized layouts and documentation.

## 🚀 Quick Start

### Installation

```bash
npm install @sandurtech/sandui
```

### Usage

1. **Wrap your app** with the `SandThemeProvider` to enable styling and tokens.
2. **Import the global CSS** file in your entry point (e.g., `main.tsx`).

```tsx
import React from 'react';
import { SandThemeProvider, SandButton, SandCard } from '@sandurtech/sandui';
import '@sandurtech/sandui/style.css';

export function App() {
  return (
    <SandThemeProvider defaultTheme="system">
      <SandCard header={<h3>Getting Started</h3>}>
        <p>Start building your next microservice with SandUI primitives.</p>
        <SandButton variant="primary">
          Launch Console
        </SandButton>
      </SandCard>
    </SandThemeProvider>
  );
}
```

## 🛠 Component Surface

SandUI provides a growing set of modular components categorized for efficiency:

| Category | Primitives |
| :--- | :--- |
| **Foundation** | `SandThemeProvider`, `SandBox`, `SandStack`, `SandGrid` |
| **Typography** | `SandTitle`, `SandText`, `SandCode`, `SandKBD` |
| **Form Controls** | `SandInput`, `SandInputGroup`, `SandCheckbox`, `SandRadio`, `SandSwitch` |
| **Data Display** | `SandTable`, `SandTabs`, `SandAccordion`, `SandCard`, `SandBadge` |
| **Feedback** | `SandAlert`, `SandToast`, `SandSnackbar`, `SandLoader`, `SandProgress` |
| **Navigation** | `SandNavbar`, `SandDrawer`, `SandBreadcrumbs`, `SandPagination` |
| **Overlays** | `SandModal`, `SandTooltip`, `SandIcon` |

## 📖 Documentation

Explore interactive examples, API references, and design guidelines:

👉 [**View Live Documentation**](https://sandurtech.github.io/SandUI/)

## 🧪 Development

Contributions are welcome! To get started locally:

```bash
# Install dependencies
npm install

# Start documentation app with Hot Module Replacement (HMR)
npm run dev

# Run unit tests with Vitest
npm run test

# Build production library artifacts
npm run build
```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Built with ❤️ by <strong>Amogha Raj Sandur</strong> & <strong>SandurTech (Sandur Technologies)</strong>
</div>