import cn from 'classnames';

import css from './styles.module.scss';

export const Mission = () => {
  return (
    <div class={css.head}>
      <div class={cn(css.content, 'maxWidth')}>
        <h1 class={css.title}>Our Mission</h1>
        <p class={css.text}>
          Through the creation of a wholesome MLP art pack, we aim to bring a
          bit of joy and help to those who need it most. We want to encourage
          child care, family life, and adoption through art that celebrates
          these beautiful aspects of life.
        </p>
        <p class={css.text}>
          Join us, and let us show the world that when we come together life and
          the magic of friendship always triumphs!
        </p>
      </div>
    </div>
  );
};
