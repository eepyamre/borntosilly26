import cn from 'classnames';

import css from './styles.module.scss';

export const Head = () => {
  return (
    <div class={css.head}>
      <div class={cn(css.content, 'maxWidth')}>
        <h1 class={css.title}>Previous Achivments</h1>
        <p class={css.text}>
          Every cent collected went to help families in need
        </p>
      </div>
    </div>
  );
};
