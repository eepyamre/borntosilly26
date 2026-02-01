import cn from 'classnames';

import css from './styles.module.scss';

export const Head = () => {
  return (
    <div class={css.head}>
      <div class={cn(css.content, 'maxWidth')}>
        <h1 class={css.title}>About Born to Silly</h1>
        <p class={css.text}>
          Born on 4chan from passionate /mlp/ autists. What began as a simple
          idea has grown into something meaningful.
        </p>
      </div>
    </div>
  );
};
