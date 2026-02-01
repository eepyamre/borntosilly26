import cn from 'classnames';

import css from './styles.module.scss';

export const Achivements = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <div class={css.item}>
        <div class={css.big}>60</div>
        <div class={css.small}>Artworks</div>
      </div>
      <div class={css.item}>
        <div class={css.big}>40</div>
        <div class={css.small}>Artists</div>
      </div>
      <div class={css.item}>
        <div class={css.big}>5.5K </div>
        <div class={css.small}>Donated</div>
      </div>
    </div>
  );
};
