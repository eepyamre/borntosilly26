import cn from 'classnames';

import css from './styles.module.scss';

export const Head = () => {
  return (
    <div class={css.head}>
      <div class={cn(css.content, 'maxWidth')}>
        <h1 class={css.title}>Privacy Policy</h1>
      </div>
    </div>
  );
};
