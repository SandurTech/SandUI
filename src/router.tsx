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

const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'feedback',
  component: lazyRouteComponent(() => import('./routes/feedback')),
});

const modalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'modals',
  component: lazyRouteComponent(() => import('./routes/modals')),
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
  kbdRoute,
  buttonsRoute,
  inputsRoute,
  cardsRoute,
  selectionRoute,
  navigationRoute,
  feedbackRoute,
  modalsRoute,
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
