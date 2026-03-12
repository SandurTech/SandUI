import type { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';

export type SandElementType = ElementType;

export type SandPolymorphicRef<T extends SandElementType> = ComponentPropsWithoutRef<T>['ref'];

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type SandPolymorphicProps<T extends SandElementType, Props = {}> = Props &
  Omit<ComponentPropsWithoutRef<T>, keyof Props | 'as'> & {
    as?: T;
  };

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type SandPolymorphicComponent<DefaultTag extends SandElementType, Props = {}> = <
  T extends SandElementType = DefaultTag,
>(
  props: SandPolymorphicProps<T, Props>,
) => ReactElement | null;

export interface SandSurfaceProps {
  children?: ReactNode;
}
