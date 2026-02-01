import cn from 'classnames';
import { FunctionComponent } from 'preact';

import { Footer } from '../Footer';
import { Header } from '../Header';
import css from './styles.module.scss';

export const Layout: FunctionComponent<{ class?: string }> = ({
  children,
  ...props
}) => {
  return (
    <div class={cn(css.layout, props.class)}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
