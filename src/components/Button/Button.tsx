import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export const Button = ({ children, href, ...otherProps }: PropsWithChildren<any>) => {
  const elementAttributes = {
    className: clsx('btn'),
    ...otherProps,
  };
  if (href) {
    return (
      <a href={href} {...elementAttributes}>
        {children}
      </a>
    );
  }
  return <button {...elementAttributes}>{children}</button>;
};
