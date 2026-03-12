import { QueryClient } from '@tanstack/react-query';
import {
  Link,
  createRootRouteWithContext,
  createRoute,
  createRouter,
  lazyRouteComponent,
} from '@tanstack/react-router';
import { AppShell } from './app/AppShell';

interface RouterContext {
  queryClient: QueryClient;
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: AppShell,
  notFoundComponent: () => (
    <section className="docs-section">
      <h2 className="section-title">Page Not Found</h2>
      <div className="sand-comp-doc">
        <p className="sand-comp-desc">
          The route you requested does not exist in this catalog.
        </p>
        <Link to="/" className="docs-nav-link">
          <span className="docs-nav-link-main">
            <span className="docs-nav-icon material-symbols-rounded" aria-hidden="true">arrow_back</span>
            <span className="docs-nav-copy">
              <span>Return to Introduction</span>
              <span className="docs-nav-description">Jump back to the introduction page.</span>
            </span>
          </span>
        </Link>
      </div>
    </section>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./routes/introduction')),
});

const designTokensRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'design-tokens',
  component: lazyRouteComponent(() => import('./routes/design-tokens')),
});

const typographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'typography',
  component: lazyRouteComponent(() => import('./routes/typography')),
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'layout',
  component: lazyRouteComponent(() => import('./routes/layout')),
});

const kbdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'kbd',
  component: lazyRouteComponent(() => import('./routes/kbd')),
});

const buttonsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'buttons',
  component: lazyRouteComponent(() => import('./routes/buttons')),
});

const inputsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'inputs',
  component: lazyRouteComponent(() => import('./routes/inputs')),
});

const cardsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'cards',
  component: lazyRouteComponent(() => import('./routes/cards')),
});

const selectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'selection',
  component: lazyRouteComponent(() => import('./routes/selection')),
});

const navigationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'navigation',
  component: lazyRouteComponent(() => import('./routes/navigation')),
});

const tableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'table',
  component: lazyRouteComponent(() => import('./routes/table')),
});

const tabsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'tabs',
  component: lazyRouteComponent(() => import('./routes/tabs')),
});

const accordionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'accordion',
  component: lazyRouteComponent(() => import('./routes/accordion')),
});

const codeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'code',
  component: lazyRouteComponent(() => import('./routes/code')),
});

const statusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'status',
  component: lazyRouteComponent(() => import('./routes/status')),
});

const notificationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'notifications',
  component: lazyRouteComponent(() => import('./routes/notifications')),
});

const modalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'modals',
  component: lazyRouteComponent(() => import('./routes/modals')),
});

const overlaysRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'overlays',
  component: lazyRouteComponent(() => import('./routes/overlays')),
});

const utilitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'utilities',
  component: lazyRouteComponent(() => import('./routes/utilities')),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  designTokensRoute,
  typographyRoute,
  layoutRoute,
  kbdRoute,
  buttonsRoute,
  inputsRoute,
  cardsRoute,
  selectionRoute,
  navigationRoute,
  tableRoute,
  tabsRoute,
  accordionRoute,
  codeRoute,
  statusRoute,
  notificationsRoute,
  modalsRoute,
  overlaysRoute,
  utilitiesRoute,
]);


export function createAppRouter(queryClient: QueryClient) {
  return createRouter({
    routeTree,
    context: { queryClient },
    basepath: import.meta.env.BASE_URL,
    defaultPreload: 'intent',
    scrollRestoration: true,
  });
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createAppRouter>;
  }
}
