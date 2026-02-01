import cn from 'classnames';

import silly from '@/assets/born_to_silly.webp';

import css from './styles.module.scss';

export const Mascot = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <div class={css.imgWrapper}>
        <img src={silly} alt="Silly Stuffing" />
        <p class={css.name}>Silly Stuffing</p>
      </div>
      <div class={css.content}>
        <h2 class={css.title}>The Mascot</h2>
        <p class={css.text}>
          A pony plushie born from a patchwork of various fabrics. She embodies
          the spirit of our art collective: coming together to spread love,
          support families, and bring joy through art.
        </p>
      </div>
    </div>
  );
};
