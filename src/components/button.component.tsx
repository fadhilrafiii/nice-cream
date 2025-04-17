import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type LinkButtonProps = {
  type: 'link';
  className?: string;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type CommonButtonProps = {
  type: 'button';
  className?: string;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | CommonButtonProps;

const Button = (props: ButtonProps) => {
  const { type, className, children, ...rest } = props;

  const classes = `text-uppercase flex h-fit min-w-32 cursor-pointer items-center justify-center rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-secondary 2xl:!text-xl ${className}`;

  if (type === 'link') {
    const { href, ...linkProps } = rest as LinkButtonProps;
    return (
      <Link href={href as Url} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as CommonButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
