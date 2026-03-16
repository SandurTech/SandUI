import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import styles from './Layout.module.scss';
import { cn } from '../utils';

export type SandContainerProps = ComponentPropsWithoutRef<'div'>;

export const SandContainer = forwardRef<HTMLDivElement, SandContainerProps>(function SandContainer(
  { className = '', ...props },
  ref,
) {
  return <div ref={ref} className={cn(styles['sand-container'], className)} {...props} />;
});
SandContainer.displayName = 'SandContainer';

export type SandHeaderProps = ComponentPropsWithoutRef<'header'>;

export const SandHeader = forwardRef<HTMLElement, SandHeaderProps>(function SandHeader(
  { className = '', ...props },
  ref,
) {
  return <header ref={ref} className={cn(styles['sand-header'], className)} {...props} />;
});
SandHeader.displayName = 'SandHeader';

/* --- App Layout (formerly Tool Layout) --- */

export type SandAppLayoutProps = ComponentPropsWithoutRef<'div'>;
export type SandAppLayoutSidebarProps = ComponentPropsWithoutRef<'aside'>;
export type SandAppLayoutMainProps = ComponentPropsWithoutRef<'main'>;

const SandAppLayoutSidebar = forwardRef<HTMLElement, SandAppLayoutSidebarProps>(
  function SandAppLayoutSidebar({ className = '', ...props }, ref) {
    return <aside ref={ref} className={cn(styles['sand-tool-panel'], className)} {...props} />;
  }
);
SandAppLayoutSidebar.displayName = 'SandAppLayout.Sidebar';

const SandAppLayoutMain = forwardRef<HTMLElement, SandAppLayoutMainProps>(
  function SandAppLayoutMain({ className = '', ...props }, ref) {
    return <main ref={ref} className={cn(styles['sand-result-panel'], className)} {...props} />;
  }
);
SandAppLayoutMain.displayName = 'SandAppLayout.Main';

export const SandAppLayoutBase = forwardRef<HTMLDivElement, SandAppLayoutProps>(
  function SandAppLayout({ className = '', ...props }, ref) {
    return <div ref={ref} className={cn(styles['sand-tool-layout'], className)} {...props} />;
  }
);

interface SandAppLayoutComponent
  extends React.ForwardRefExoticComponent<SandAppLayoutProps & React.RefAttributes<HTMLDivElement>> {
  Sidebar: typeof SandAppLayoutSidebar;
  Main: typeof SandAppLayoutMain;
}

export const SandAppLayout = Object.assign(SandAppLayoutBase, {
  Sidebar: SandAppLayoutSidebar,
  Main: SandAppLayoutMain,
}) as SandAppLayoutComponent;

SandAppLayout.displayName = 'SandAppLayout';

/** @deprecated Use SandAppLayout */
export const SandToolLayout = SandAppLayout;
/** @deprecated Use SandAppLayout.Sidebar */
export const SandToolPanel = SandAppLayoutSidebar;
/** @deprecated Use SandAppLayout.Main */
export const SandResultPanel = SandAppLayoutMain;

export type SandToolLayoutProps = SandAppLayoutProps;
export type SandToolPanelProps = SandAppLayoutSidebarProps;
export type SandResultPanelProps = SandAppLayoutMainProps;

/* --- Microservice Layout --- */

export type SandMicroserviceLayoutProps = ComponentPropsWithoutRef<'div'>;

const SandMicroserviceSidebar = forwardRef<HTMLElement, ComponentPropsWithoutRef<'aside'>>(
  function SandMicroserviceSidebar({ children, className = '', ...props }, ref) {
    return (
      <aside ref={ref} className={cn(styles['sand-microservice-sidebar'], className)} {...props}>
        {children}
      </aside>
    );
  }
);
SandMicroserviceSidebar.displayName = 'SandMicroserviceLayout.Sidebar';

const SandMicroserviceContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  function SandMicroserviceContent({ children, className = '', ...props }, ref) {
    return (
      <div ref={ref} className={cn(styles['sand-microservice-content'], className)} {...props}>
        {children}
      </div>
    );
  }
);
SandMicroserviceContent.displayName = 'SandMicroserviceLayout.Content';

const SandMicroserviceMain = forwardRef<HTMLElement, ComponentPropsWithoutRef<'main'>>(
  function SandMicroserviceMain({ children, className = '', ...props }, ref) {
    return (
      <main ref={ref} className={cn(styles['sand-microservice-main'], className)} {...props}>
        {children}
      </main>
    );
  }
);
SandMicroserviceMain.displayName = 'SandMicroserviceLayout.Main';

interface SandMicroserviceLayoutComponent
  extends React.ForwardRefExoticComponent<SandMicroserviceLayoutProps & React.RefAttributes<HTMLDivElement>> {
  Sidebar: typeof SandMicroserviceSidebar;
  Content: typeof SandMicroserviceContent;
  Main: typeof SandMicroserviceMain;
}

export const SandMicroserviceLayout = forwardRef<HTMLDivElement, SandMicroserviceLayoutProps>(
  function SandMicroserviceLayout({ children, className = '', ...props }, ref) {
    return (
      <div ref={ref} className={cn(styles['sand-microservice-layout'], className)} {...props}>
        {children}
      </div>
    );
  }
) as SandMicroserviceLayoutComponent;

SandMicroserviceLayout.displayName = 'SandMicroserviceLayout';

SandMicroserviceLayout.Sidebar = SandMicroserviceSidebar;
SandMicroserviceLayout.Content = SandMicroserviceContent;
SandMicroserviceLayout.Main = SandMicroserviceMain;
