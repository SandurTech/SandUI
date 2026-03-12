import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../utils';
import styles from './Progress.module.scss';

export interface SandProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: number;
  thickness?: number;
  variant?: 'linear' | 'circular';
  showValue?: boolean;
}

function clamp(value: number, max: number) {
  return Math.min(Math.max(value, 0), max);
}

export const SandProgress = forwardRef<HTMLDivElement, SandProgressProps>(function SandProgress(
  { value, max = 100, size = 96, thickness = 8, variant = 'linear', showValue, className, style, ...props },
  ref,
) {
  const safeValue = clamp(value, max);
  const progress = (safeValue / max) * 100;

  if (variant === 'circular') {
    const radius = (size - thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference - (progress / 100) * circumference;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={safeValue}
        className={cn(className)}
        style={{ position: 'relative', width: size, height: size, ...style }}
        {...props}
      >
        <svg className={styles.ring} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle className={styles.ringTrack} cx={size / 2} cy={size / 2} r={radius} strokeWidth={thickness} />
          <circle
            className={styles.ringValue}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={thickness}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
        </svg>
        {showValue && <span className={styles.label}>{Math.round(progress)}%</span>}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={safeValue}
      className={cn(styles.track, className)}
      style={{ height: thickness, ...style }}
      {...props}
    >
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
});

SandProgress.displayName = 'SandProgress';
