import cn from 'classnames';
import { FunctionComponent } from 'preact';
import { AnchorHTMLAttributes } from 'preact/compat';

import css from './styles.module.scss';

export const Link: FunctionComponent<
  AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <a {...props} class={cn(css.link, props.class)}>
      {children}
    </a>
  );
};
