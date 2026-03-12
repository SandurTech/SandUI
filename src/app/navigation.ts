export type AppRoutePath =
  | '/'
  | '/design-tokens'
  | '/typography'
  | '/layout'
  | '/kbd'
  | '/buttons'
  | '/inputs'
  | '/cards'
  | '/selection'
  | '/navigation'
  | '/table'
  | '/tabs'
  | '/accordion'
  | '/code'
  | '/status'
  | '/notifications'
  | '/modals'
  | '/overlays'
  | '/utilities';

export interface NavItem {
  to: AppRoutePath;
  label: string;
  icon: string;
  description: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  seoDescription: string;
  llmsSummary: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'Introduction',
    items: [
      {
        to: '/',
        label: 'Introduction',
        icon: 'home_app_logo',
        description: 'Project summary, package install, and the SandUI library introduction.',
        keywords: ['intro', 'overview', 'introduction', 'sandui', 'install'],
        metaTitle: 'SandUI Library Catalogue: Accessible React UI Components',
        metaDescription: 'Explore the SandUI TypeScript UI Library with accessible React components, strong semantics, and package-ready UI primitives.',
        seoDescription: 'SandUI is an Accessible React Component catalogue and TypeScript UI Library built for teams shipping SaaS products, dashboards, and microservices. The introduction page explains how to install the package, understand its design philosophy, and adopt consistent, high-performance UI primitives across product surfaces without sacrificing accessibility, semantics, or developer experience.',
        llmsSummary: 'Introduction: install SandUI with npm, review the library purpose, and start from package-ready accessible React components built with TypeScript.',
      },
    ],
  },
  {
    title: 'Foundations',
    items: [
      {
        to: '/design-tokens',
        label: 'Design Tokens',
        icon: 'palette',
        description: 'Core color, theme, and spacing references.',
        keywords: ['tokens', 'colors', 'palette', 'theme', 'spacing'],
        metaTitle: 'SandUI Design Tokens: TypeScript UI Library Foundations',
        metaDescription: 'Review SandUI design tokens for colors, spacing, and theme values used across the accessible React component library.',
        seoDescription: 'SandUI Design Tokens document the visual foundation of this TypeScript UI Library, including colors, spacing, and theme primitives that keep Accessible React Component usage consistent. Use this page when you need a high-performance design language for product interfaces, shared styling systems, or reusable UI architecture across platforms.',
        llmsSummary: 'Design Tokens: reference SandUI colors, spacing, and theme foundations before composing components or custom product surfaces.',
      },
      {
        to: '/typography',
        label: 'Typography',
        icon: 'format_size',
        description: 'Headings, body styles, and type hierarchy guidance.',
        keywords: ['type', 'headings', 'body', 'copy', 'text', 'SandTitle', 'SandText', 'SandCode'],
        metaTitle: 'SandUI Typography: Accessible React Content Styles',
        metaDescription: 'See the SandUI typography scale, heading structure, and content hierarchy for accessible React applications.',
        seoDescription: 'SandUI Typography defines the content hierarchy for this Accessible React Component ecosystem and TypeScript UI Library. Use it to shape readable interfaces, maintain strong heading structure, and keep product copy consistent across high-performance dashboards, product marketing pages, internal tools, and software documentation.',
        llmsSummary: 'Typography: use the documented heading and body scale to keep text hierarchy readable, semantic, and consistent across SandUI products.',
      },
      {
        to: '/layout',
        label: 'Layout & Theme',
        icon: 'view_quilt',
        description: 'Theme provider, layout primitives, grid, and icon wrappers.',
        keywords: ['layout', 'theme', 'provider', 'grid', 'stack', 'box', 'icon', 'SandBox', 'SandStack', 'SandGrid', 'SandIcon', 'SandThemeProvider', 'SandContainer', 'SandHeader', 'SandToolLayout', 'SandToolPanel', 'SandResultPanel'],
        metaTitle: 'SandThemeProvider, SandBox, SandGrid, SandIcon | SandUI',
        metaDescription: 'Review SandUI layout primitives and theming infrastructure for premium React interfaces.',
        seoDescription: 'SandThemeProvider, SandBox, SandStack, SandGrid, and SandIcon form the foundational layout and theming layer in SandUI. Use this page to understand spacing, responsive layout composition, theme token overrides, and consistent icon rendering across dashboards, landing pages, and product shells.',
        llmsSummary: 'Layout & Theme: use SandThemeProvider for tokens, SandBox and SandStack for composition, SandGrid for responsive layout, and SandIcon for shared icon rendering.',
      },
      {
        to: '/kbd',
        label: 'Kbd',
        icon: 'keyboard_keys',
        description: 'Keyboard shortcut keycaps and command hints.',
        keywords: ['keyboard', 'shortcut', 'hotkey', 'command', 'kbd', 'SandKBD'],
        metaTitle: 'SandKBD: Accessible React Keyboard Shortcut Component',
        metaDescription: 'Use SandKBD for semantic keyboard shortcut hints in the SandUI TypeScript UI Library.',
        seoDescription: 'SandKBD is an Accessible React Component for keyboard shortcuts and command hints inside the SandUI TypeScript UI Library. It gives teams a high-performance way to present shortcuts, command palette guidance, and system hotkeys with semantic HTML that improves readability for users, crawlers, and AI systems.',
        llmsSummary: 'SandKBD: render keyboard shortcuts with semantic kbd markup for command hints, onboarding, and power-user workflows.',
      },
    ],
  },
  {
    title: 'Actions & Inputs',
    items: [
      {
        to: '/buttons',
        label: 'Buttons',
        icon: 'smart_button',
        description: 'Primary, secondary, outline, success, and failed action buttons.',
        keywords: ['button', 'cta', 'action', 'primary', 'secondary', 'SandButton'],
        metaTitle: 'SandButton: Accessible React Button Component | SandUI',
        metaDescription: 'Discover SandButton, a high-performance Accessible React Component in the SandUI TypeScript UI Library.',
        seoDescription: 'SandButton is an Accessible React Component in the SandUI TypeScript UI Library built for keyboard interaction, clean semantics, and high-performance product interfaces. Use it for primary actions, secondary flows, outline actions, and system status buttons across SaaS products, microservices, dashboards, admin tools, and internal platforms without rewriting interaction logic.',
        llmsSummary: 'SandButton: use variant prop for primary, secondary, outline, success, or failed actions; supports button attributes and forwarded refs.',
      },
      {
        to: '/inputs',
        label: 'Inputs & Forms',
        icon: 'text_fields',
        description: 'Text fields, validation, helper text, and form inputs.',
        keywords: ['input', 'form', 'textfield', 'validation', 'field', 'SandInput', 'SandInputGroup', 'SandFormGroup'],
        metaTitle: 'SandInput: Accessible React Form Inputs | SandUI',
        metaDescription: 'Build accessible forms with SandInput and SandInputGroup from the SandUI TypeScript UI Library.',
        seoDescription: 'SandInput and SandInputGroup are Accessible React Component patterns for form-heavy interfaces in the SandUI TypeScript UI Library. They support semantic labeling, helper text, validation states, and high-performance data entry workflows that scale cleanly across SaaS dashboards, product configuration panels, onboarding forms, and internal business tools.',
        llmsSummary: 'Inputs & Forms: use SandInput for fields and SandInputGroup for labels, helper text, error states, and accessible form composition.',
      },
      {
        to: '/selection',
        label: 'Selection Controls',
        icon: 'check_box',
        description: 'Checkboxes, radio buttons, and switches for choice-driven flows.',
        keywords: ['checkbox', 'radio', 'switch', 'selection', 'toggle', 'SandCheckbox', 'SandRadio', 'SandSwitch', 'SandChoiceGroup'],
        metaTitle: 'SandUI Selection Controls: Accessible React Inputs',
        metaDescription: 'Use SandCheckbox, SandRadio, and SandSwitch for accessible selection flows in the SandUI TypeScript UI Library.',
        seoDescription: 'SandUI Selection Controls deliver Accessible React Component patterns for binary decisions, exclusive choices, and toggles in a high-performance TypeScript UI Library. Use SandCheckbox, SandRadio, SandSwitch, and SandChoiceGroup when you need semantic form controls, keyboard navigation, and dependable interaction behavior across settings panels, onboarding flows, and control surfaces.',
        llmsSummary: 'Selection Controls: use SandCheckbox, SandRadio, SandSwitch, and SandChoiceGroup for accessible choice, toggle, and settings workflows.',
      },
    ],
  },
  {
    title: 'Data Display',
    items: [
      {
        to: '/table',
        label: 'Table',
        icon: 'table_rows',
        description: 'Structured tabular data with headers and striped rows.',
        keywords: ['table', 'grid', 'data', 'rows', 'SandTable'],
        metaTitle: 'SandTable: Accessible React Table Component | SandUI',
        metaDescription: 'Display structured data sets with SandTable in the SandUI TypeScript UI Library.',
        seoDescription: 'SandTable is an Accessible React Component for displaying structured data sets, logs, and resource lists. It supports striped rows, sticky headers, and high-performance rendering for data-heavy dashboards and admin tools.',
        llmsSummary: 'SandTable: use for structured data with semantic thead and tbody children; supports striped and stickyHeader props.',
      },
      {
        to: '/tabs',
        label: 'Tabs',
        icon: 'tab',
        description: 'Keyboard-accessible view switching for layered content.',
        keywords: ['tabs', 'view', 'switch', 'layered', 'SandTabs'],
        metaTitle: 'SandTabs: Accessible React Tab Component | SandUI',
        metaDescription: 'Organize content into accessible tabbed views with SandTabs.',
        seoDescription: 'SandTabs is an Accessible React Component for organizing and navigating between groups of content at the same level of hierarchy. It features built-in keyboard navigation and semantic WAI-ARIA roles.',
        llmsSummary: 'SandTabs: use for keyboard-accessible view switching with an items array containing id, label, and content.',
      },
      {
        to: '/accordion',
        label: 'Accordion',
        icon: 'expand_more',
        description: 'Collapsible content sections for progressive disclosure.',
        keywords: ['accordion', 'collapse', 'expand', 'disclosure', 'SandAccordion'],
        metaTitle: 'Stop Building Bad Accordions! Use SandAccordion Instead',
        metaDescription: 'Boost your DX with SandAccordion: The ultimate Accessible React Component for collapsible content. Fully typed, zero fluff, and wildly performant.',
        seoDescription: 'SandAccordion allows users to toggle the display of sections of content, enabling progressive disclosure in dense interfaces like configuration panels and FAQ sections.',
        llmsSummary: 'SandAccordion: use for collapsible content sections with an items array containing id, title, and content.',
      },
      {
        to: '/code',
        label: 'Code Display',
        icon: 'code',
        description: 'Formatted code blocks with copy-to-clipboard support.',
        keywords: ['code', 'pre', 'block', 'syntax', 'copy', 'SandCodeBlock', 'SandCodeTabs'],
        metaTitle: 'SandCodeBlock: Accessible React Code Components | SandUI',
        metaDescription: 'Display formatted code with copy support using SandCodeBlock and SandCodeTabs.',
        seoDescription: 'SandCodeBlock and SandCodeTabs are Accessible React Components for technical documentation and developer tools. They provide high-performance code rendering with built-in copy-to-clipboard functionality.',
        llmsSummary: 'Code Display: use SandCodeBlock for single snippets and SandCodeTabs for multi-language or multi-package examples.',
      },
    ],
  },
  {
    title: 'Navigation & Shell',
    items: [
      {
        to: '/navigation',
        label: 'Navigation',
        icon: 'route',
        description: 'Breadcrumbs and pagination patterns for larger interfaces.',
        keywords: ['breadcrumb', 'navigation', 'hierarchy', 'pagination', 'path', 'SandBreadcrumbs', 'SandPagination'],
        metaTitle: 'SandBreadcrumbs and SandPagination | SandUI Navigation',
        metaDescription: 'Explore accessible breadcrumb and pagination components in the SandUI TypeScript UI Library.',
        seoDescription: 'SandBreadcrumbs and SandPagination are Accessible React Component patterns for wayfinding and result navigation in the SandUI TypeScript UI Library. They help teams build high-performance interfaces with semantic structure, predictable keyboard support, and search-friendly page organization for product catalogues, dashboards, admin tools, and content-heavy applications.',
        llmsSummary: 'Navigation: use SandBreadcrumbs for hierarchical location context and SandPagination for page navigation with keyboard support.',
      },
      {
        to: '/overlays',
        label: 'Overlays & Shells',
        icon: 'splitscreen',
        description: 'Navbar, drawer, and tooltip patterns for layered interactions.',
        keywords: ['navbar', 'drawer', 'tooltip', 'overlay', 'navigation shell', 'SandNavbar', 'SandDrawer', 'SandTooltip'],
        metaTitle: 'SandNavbar, SandDrawer, SandTooltip | SandUI Overlays',
        metaDescription: 'Use SandUI shell and overlay primitives for navigation and contextual help.',
        seoDescription: 'SandNavbar, SandDrawer, and SandTooltip provide responsive shell navigation and lightweight overlays in SandUI. Use them to build global headers, mobile side panels, and contextual helper text with polished motion and clear accessibility affordances.',
        llmsSummary: 'Overlays & Shells: use SandNavbar for top-level navigation, SandDrawer for side panels, and SandTooltip for hover and focus helper text.',
      },
    ],
  },
  {
    title: 'Feedback & Overlays',
    items: [
      {
        to: '/status',
        label: 'Status & Progress',
        icon: 'pending_actions',
        description: 'Alerts, loaders, and progress indicators.',
        keywords: ['alert', 'loader', 'progress', 'skeleton', 'status', 'SandAlert', 'SandLoader', 'SandSkeleton', 'SandProgress'],
        metaTitle: 'SandAlert, SandLoader, SandProgress | SandUI Status',
        metaDescription: 'Communicate system state and progress with SandUI feedback primitives.',
        seoDescription: 'SandAlert, SandLoader, SandSkeleton, and SandProgress cover inline status communication and loading states in SandUI. Use them to present warnings, shimmer placeholders, and determinate progress with accessible semantics.',
        llmsSummary: 'Status & Progress: use SandAlert for notices, SandLoader and SandSkeleton for loading, and SandProgress for activity indicators.',
      },
      {
        to: '/notifications',
        label: 'Notifications',
        icon: 'notifications_active',
        description: 'Toasts and snackbars for async feedback.',
        keywords: ['toast', 'snackbar', 'notification', 'feedback', 'SandToast', 'SandSnackbar'],
        metaTitle: 'SandToast and SandSnackbar | SandUI Notifications',
        metaDescription: 'Use SandToast and SandSnackbar for lightweight feedback in the SandUI TypeScript UI Library.',
        seoDescription: 'SandToast and SandSnackbar deliver short-lived status updates and async completion feedback without interrupting user flow. These Accessible React Components support variants for success, failure, and information.',
        llmsSummary: 'Notifications: use SandToast for detailed status confirmation and SandSnackbar for lightweight inline notices.',
      },
      {
        to: '/modals',
        label: 'Modal Dialogs',
        icon: 'web_asset',
        description: 'Focused dialogs for confirmation and editing flows.',
        keywords: ['modal', 'dialog', 'overlay', 'popup', 'SandModal'],
        metaTitle: 'SandModal: Accessible React Dialog Component | SandUI',
        metaDescription: 'Use SandModal for accessible dialog workflows with focus management in the SandUI TypeScript UI Library.',
        seoDescription: 'SandModal is a high-performance Accessible React Component for dialogs, confirmations, and focused workflows in the SandUI TypeScript UI Library. It includes semantic dialog markup, focus trapping, keyboard escape handling, and composable subcomponents so teams can build production-grade overlays for SaaS products, admin tools, and mission-critical product flows.',
        llmsSummary: 'SandModal: render accessible dialogs with open and onClose props, built-in focus management, and static subcomponents like Header, Body, Footer, Title, and Description.',
      },
    ],
  },
  {
    title: 'Structure & Metadata',
    items: [
      {
        to: '/cards',
        label: 'Cards',
        icon: 'dashboard',
        description: 'Surface containers for grouped content and actions.',
        keywords: ['card', 'container', 'panel', 'surface', 'SandCard'],
        metaTitle: 'SandCard: Accessible React Card Component | SandUI',
        metaDescription: 'Use SandCard to group content and actions with semantic structure inside the SandUI TypeScript UI Library.',
        seoDescription: 'SandCard is a high-performance Card pattern in the SandUI TypeScript UI Library for grouping related content, metadata, and actions with clear structure. This Accessible React Component uses semantic regions for headers and footers so teams can build reusable panels, product summaries, and dashboard modules that remain readable for search engines and assistive technologies.',
        llmsSummary: 'SandCard: group related content with optional header and footer regions using semantic article markup and forwarded refs.',
      },
      {
        to: '/utilities',
        label: 'Utilities',
        icon: 'category',
        description: 'Badges, dividers, and supporting utility primitives.',
        keywords: ['utilities', 'badge', 'divider', 'helper', 'SandBadge', 'SandDivider'],
        metaTitle: 'SandBadge and SandDivider | SandUI Utility Components',
        metaDescription: 'Use SandBadge and SandDivider utility components from the SandUI TypeScript UI Library.',
        seoDescription: 'SandBadge and SandDivider are lightweight but high-impact primitives in the SandUI TypeScript UI Library. These Accessible React Component utilities help teams label metadata, communicate states, and structure content with semantic markup that improves scanability, composability, and search understanding across dense product interfaces and documentation experiences.',
        llmsSummary: 'Utilities: use SandBadge for status labels and SandDivider for semantic content separation in reusable interface layouts.',
      },
    ],
  },
];

export const navItems = navGroups.flatMap((group) => group.items);

export const navItemByPath = Object.fromEntries(
  navItems.map((item) => [item.to, item]),
) as Record<AppRoutePath, NavItem>;
