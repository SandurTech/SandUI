import { 
  forwardRef, 
  useId, 
  useState, 
  useRef, 
  useCallback,
  useEffect,
  type SelectHTMLAttributes 
} from 'react';
import { cn } from '../utils';
import { SandFormGroup } from '../Input/Input';
import { SandIcon } from '../Icon/Icon';
import { useDisclosure } from '../../hooks/useDisclosure';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import styles from './Select.module.scss';

export interface SandSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SandSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  /** Label for the select */
  label?: string;
  /** Helper text displayed below the select */
  helperText?: string;
  /** Error state flag */
  error?: boolean;
  /** Ordered collection of selection options. */
  options?: SandSelectOption[];
  /** Called when selection changes. */
  onChange?: (value: string) => void;
  /** Placeholder text when no value is selected. */
  placeholder?: string;
}

/**
 * Custom-styled selection component with ARIA support and native form integration.
 */
export const SandSelect = forwardRef<HTMLSelectElement, SandSelectProps>(function SandSelect(
  { label, helperText, error, options = [], placeholder = 'Select an option...', value, defaultValue, onChange, className = '', ...props },
  ref,
) {
  const generatedId = useId();
  const selectId = props.id ?? generatedId;
  const helperTextId = helperText ? `${selectId}-help` : undefined;
  
  const [internalValue, setInternalValue] = useState(defaultValue ?? value ?? '');
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(opt => opt.value === (value ?? internalValue));

  const handleSelect = useCallback((val: string) => {
    setInternalValue(val);
    onChange?.(val);
    onClose();
    triggerRef.current?.focus();
  }, [onChange, onClose]);

  useFocusTrap(listboxRef, { enabled: isOpen });

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
      triggerRef.current?.focus();
    }
    if (event.key === 'ArrowDown' && !isOpen) {
      onOpen();
    }
  };

  return (
    <SandFormGroup label={label} htmlFor={selectId}>
      <div ref={containerRef} className={styles.container} onKeyDown={handleKeyDown}>
        {/* Hidden native select for form data */}
        <select
          ref={ref}
          id={selectId}
          value={value ?? internalValue}
          onChange={(e) => handleSelect(e.target.value)}
          className={styles.nativeSelect}
          tabIndex={-1}
          aria-hidden="true"
          {...props}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          ))}
        </select>

        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${selectId}-label`}
          className={cn(
            styles.trigger,
            error && styles.error,
            isOpen && styles.triggerActive,
            className
          )}
          onClick={onToggle}
        >
          <span className={cn(styles.value, !selectedOption && styles.placeholder)}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <SandIcon icon="expand_more" size={20} className={cn(styles.chevron, isOpen && styles.chevronOpen)} />
        </button>

        {isOpen && (
          <ul
            ref={listboxRef}
            role="listbox"
            className={styles.listbox}
            aria-labelledby={`${selectId}-label`}
          >
            {options.map((opt) => {
              const isSelected = opt.value === (value ?? internalValue);
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={cn(
                    styles.option,
                    isSelected && styles.optionSelected,
                    opt.disabled && styles.optionDisabled
                  )}
                  onClick={() => !opt.disabled && handleSelect(opt.value)}
                  tabIndex={opt.disabled ? undefined : 0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      !opt.disabled && handleSelect(opt.value);
                    }
                  }}
                >
                  {opt.label}
                  {isSelected && <SandIcon icon="check" size={18} className={styles.checkIcon} />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {helperText && (
        <span id={helperTextId} className={cn(styles.helper, error && styles['helper-error'])}>
          {helperText}
        </span>
      )}
    </SandFormGroup>
  );
});

SandSelect.displayName = 'SandSelect';
