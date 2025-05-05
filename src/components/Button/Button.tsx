import clsx from 'clsx';
import { ReactNode } from 'react';

export interface IButtonProps {
  className?: string;
  href?: string;
  children?: ReactNode;
  [key: string]: any;
}

export const Button = ({ children, href, className, ...otherProps }: IButtonProps) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component href={href} className={clsx('btn', className)} {...otherProps}>
      {children}
    </Component>
  );
};
