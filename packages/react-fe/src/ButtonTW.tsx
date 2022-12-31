import { forwardRef } from 'react';

export interface ButtonProps extends React.ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button
        className="ramadevsign-bg-primary-500 ramadevsign-px-8 ramadevsign-py-4 ramadevsign-text-neutral-white ramadevsign-rounded-large"
        {...rest}
        ref={ref}
        disabled={disabled || loading}
      />
    );
  }
);

Button.displayName = 'ButtonTailwind';

export default Button;
