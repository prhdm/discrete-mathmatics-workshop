import { AnchorHTMLAttributes, FC } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded-md transition-colors';
  
  const variantStyles = {
    primary: 'border border-gray-300 dark:border-gray-700 text-black dark:text-white bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700',
    secondary: 'border border-transparent text-white bg-blue-600 hover:bg-blue-700',
  };

  const widthStyles = fullWidth ? 'w-full' : 'w-full sm:w-auto';

  return (
    <a
      className={cn(baseStyles, variantStyles[variant], widthStyles, className)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
};

