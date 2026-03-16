import { useCallback, useState, useRef, useEffect } from 'react';

export interface UseControllableStateProps<T> {
  /** The value in controlled mode */
  value?: T;
  /** The initial value in uncontrolled mode */
  defaultValue?: T | (() => T);
  /** Action performed when the value changes */
  onChange?: (value: T) => void;
}

/**
 * Custom hook to manage state that can be either controlled or uncontrolled.
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { value, defaultValue, onChange } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue as T);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : uncontrolledValue;

  const onChangeRef = useRef(onChange);
  
  useEffect(() => {
    onChangeRef.current = onChange;
  });

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const nextValue = typeof next === 'function' ? (next as (prev: T) => T)(currentValue) : next;

      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }

      onChangeRef.current?.(nextValue);
    },
    [isControlled, currentValue],
  );

  return [currentValue, setValue] as const;
}
