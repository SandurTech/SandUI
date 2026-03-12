export type AppRoutePath =
  | '/'
  | '/design-tokens'
  | '/typography'
  | '/kbd'
  | '/buttons'
  | '/inputs'
  | '/cards'
  | '/selection'
  | '/navigation'
  | '/feedback'
  | '/modals'
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
        keywords: ['type', 'headings', 'body', 'copy', 'text'],
        metaTitle: 'SandUI Typography: Accessible React Content Styles',
        metaDescription: 'See the SandUI typography scale, heading structure, and content hierarchy for accessible React applications.',
        seoDescription: 'SandUI Typography defines the content hierarchy for this Accessible React Component ecosystem and TypeScript UI Library. Use it to shape readable interfaces, maintain strong heading structure, and keep product copy consistent across high-performance dashboards, product marketing pages, internal tools, and software documentation.',
        llmsSummary: 'Typography: use the documented heading and body scale to keep text hierarchy readable, semantic, and consistent across SandUI products.',
      },
      {
        to: '/kbd',
        label: 'Kbd',
        icon: 'keyboard_keys',
        description: 'Keyboard shortcut keycaps and command hints.',
        keywords: ['keyboard', 'shortcut', 'hotkey', 'command', 'kbd'],
        metaTitle: 'SandKBD: Accessible React Keyboard Shortcut Component',
        metaDescription: 'Use SandKBD for semantic keyboard shortcut hints in the SandUI TypeScript UI Library.',
        seoDescription: 'SandKBD is an Accessible React Component for keyboard shortcuts and command hints inside the SandUI TypeScript UI Library. It gives teams a high-performance way to present shortcuts, command palette guidance, and system hotkeys with semantic HTML that improves readability for users, crawlers, and AI systems.',
        llmsSummary: 'SandKBD: render keyboard shortcuts with semantic kbd markup for command hints, onboarding, and power-user workflows.',
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        to: '/buttons',
        label: 'Buttons',
        icon: 'smart_button',
        description: 'Primary, secondary, outline, success, and failed action buttons.',
        keywords: ['button', 'cta', 'action', 'primary', 'secondary'],
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
        keywords: ['input', 'form', 'textfield', 'validation', 'field'],
        metaTitle: 'SandInput: Accessible React Form Inputs | SandUI',
        metaDescription: 'Build accessible forms with SandInput and SandInputGroup from the SandUI TypeScript UI Library.',
        seoDescription: 'SandInput and SandInputGroup are Accessible React Component patterns for form-heavy interfaces in the SandUI TypeScript UI Library. They support semantic labeling, helper text, validation states, and high-performance data entry workflows that scale cleanly across SaaS dashboards, product configuration panels, onboarding forms, and internal business tools.',
        llmsSummary: 'Inputs & Forms: use SandInput for fields and SandInputGroup for labels, helper text, error states, and accessible form composition.',
      },
      {
        to: '/cards',
        label: 'Cards',
        icon: 'dashboard',
        description: 'Surface containers for grouped content and actions.',
        keywords: ['card', 'container', 'panel', 'surface'],
        metaTitle: 'SandCard: Accessible React Card Component | SandUI',
        metaDescription: 'Use SandCard to group content and actions with semantic structure inside the SandUI TypeScript UI Library.',
        seoDescription: 'SandCard is a high-performance Card pattern in the SandUI TypeScript UI Library for grouping related content, metadata, and actions with clear structure. This Accessible React Component uses semantic regions for headers and footers so teams can build reusable panels, product summaries, and dashboard modules that remain readable for search engines and assistive technologies.',
        llmsSummary: 'SandCard: group related content with optional header and footer regions using semantic article markup and forwarded refs.',
      },
      {
        to: '/selection',
        label: 'Selection Controls',
        icon: 'check_box',
        description: 'Checkboxes, radio buttons, and switches for choice-driven flows.',
        keywords: ['checkbox', 'radio', 'switch', 'selection', 'toggle'],
        metaTitle: 'SandUI Selection Controls: Accessible React Inputs',
        metaDescription: 'Use SandCheckbox, SandRadio, and SandSwitch for accessible selection flows in the SandUI TypeScript UI Library.',
        seoDescription: 'SandUI Selection Controls deliver Accessible React Component patterns for binary decisions, exclusive choices, and toggles in a high-performance TypeScript UI Library. Use SandCheckbox, SandRadio, SandSwitch, and SandChoiceGroup when you need semantic form controls, keyboard navigation, and dependable interaction behavior across settings panels, onboarding flows, and control surfaces.',
        llmsSummary: 'Selection Controls: use SandCheckbox, SandRadio, SandSwitch, and SandChoiceGroup for accessible choice, toggle, and settings workflows.',
      },
      {
        to: '/navigation',
        label: 'Navigation',
        icon: 'route',
        description: 'Breadcrumbs and pagination patterns for larger interfaces.',
        keywords: ['breadcrumb', 'navigation', 'hierarchy', 'pagination', 'path'],
        metaTitle: 'SandBreadcrumbs and SandPagination | SandUI Navigation',
        metaDescription: 'Explore accessible breadcrumb and pagination components in the SandUI TypeScript UI Library.',
        seoDescription: 'SandBreadcrumbs and SandPagination are Accessible React Component patterns for wayfinding and result navigation in the SandUI TypeScript UI Library. They help teams build high-performance interfaces with semantic structure, predictable keyboard support, and search-friendly page organization for product catalogues, dashboards, admin tools, and content-heavy applications.',
        llmsSummary: 'Navigation: use SandBreadcrumbs for hierarchical location context and SandPagination for page navigation with keyboard support.',
      },
      {
        to: '/feedback',
        label: 'Feedback',
        icon: 'sms',
        description: 'Toast and snackbar patterns for lightweight system responses.',
        keywords: ['toast', 'snackbar', 'feedback', 'notification', 'status'],
        metaTitle: 'SandToast and SandSnackbar | SandUI Feedback Components',
        metaDescription: 'Add accessible toast and snackbar feedback with SandUI’s TypeScript UI Library.',
        seoDescription: 'SandToast and SandSnackbar are Accessible React Component patterns for status messaging in the SandUI TypeScript UI Library. Use them to surface high-performance system feedback, save states, release notifications, and recovery prompts with semantic live-region behavior that keeps interfaces responsive, readable, and dependable for assistive technology users.',
        llmsSummary: 'Feedback: use SandToast and SandSnackbar for status, success, info, and error messaging with semantic live-region behavior.',
      },
      {
        to: '/modals',
        label: 'Modal Dialogs',
        icon: 'web_asset',
        description: 'Focused dialogs for confirmation and editing flows.',
        keywords: ['modal', 'dialog', 'overlay', 'popup'],
        metaTitle: 'SandModal: Accessible React Dialog Component | SandUI',
        metaDescription: 'Use SandModal for accessible dialog workflows with focus management in the SandUI TypeScript UI Library.',
        seoDescription: 'SandModal is a high-performance Accessible React Component for dialogs, confirmations, and focused workflows in the SandUI TypeScript UI Library. It includes semantic dialog markup, focus trapping, keyboard escape handling, and composable subcomponents so teams can build production-grade overlays for SaaS products, admin tools, and mission-critical product flows.',
        llmsSummary: 'SandModal: render accessible dialogs with open and onClose props, built-in focus management, and static subcomponents like Header, Body, Footer, Title, and Description.',
      },
      {
        to: '/utilities',
        label: 'Utilities',
        icon: 'category',
        description: 'Badges, dividers, and supporting utility primitives.',
        keywords: ['utilities', 'badge', 'divider', 'helper'],
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
