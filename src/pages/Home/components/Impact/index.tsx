import cn from 'classnames';

import { Link } from '@/components';
import { Button } from '@/components/Button';

import css from './styles.module.scss';

export const Impact = () => {
  return (
    <div class={css.wrapper}>
      <div class={cn(css.content, 'maxWidth')}>
        <div class={css.textWrapper}>
          <h1 class={css.title}>Our Impact</h1>
          <p class={css.description}>
            Thanks to dozens of talented artists and (you), we raised over $5000
            to help <Link href="https://anchorridge.org/">Anchor Ridge</Link>{' '}
            continue their important work!
          </p>
        </div>
        <div class={css.raised}>
          <h2 class={css.subtitle}>$5,527</h2>
          <span class={css.text}>Raised in 2025</span>
          <Button class={css.button} href={'/archive'}>
            Check the Archive
          </Button>
        </div>
      </div>
    </div>
  );
};
