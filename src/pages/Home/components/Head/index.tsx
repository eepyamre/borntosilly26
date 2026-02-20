import { ArrowUp } from '@/icons/ArrowUp';
import cn from 'classnames';

import silly from '@/assets/silly.webp';

import css from './styles.module.scss';

export const Head = () => {
  return (
    <div class={cn(css.head, 'maxWidth')}>
      <div class={css.content}>
        <h1 class={css.title}>Born to Silly</h1>
        <p class={css.description}>
          A heartfelt art pack featuring adorable foals and more!
        </p>
        <p class={css.description}>
          Created to raise funds for children in need.
        </p>
        <p class={css.description}>
          The current charity of choice is Kids Rein.
        </p>
      </div>
      <div class={css.imgWrapper}>
        <img class={css.img} src={silly} alt="Silly Stuffing" />
        <div class={css.sillyWrapper}>
          <span>Look at her go!</span>
          <ArrowUp class={css.arrow} />
        </div>
      </div>
    </div>
  );
};
