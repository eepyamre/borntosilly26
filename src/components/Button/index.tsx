import cn from 'classnames';
import { FunctionComponent } from 'preact';
import { AnchorHTMLAttributes } from 'preact/compat';

import css from './styles.module.scss';

export const Button: FunctionComponent<
  AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <a {...props} class={cn(css.button, props.class)}>
      {children}
    </a>
  );
};
