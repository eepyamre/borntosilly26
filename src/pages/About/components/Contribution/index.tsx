import cn from 'classnames';

import { Button } from '@/components';

import css from './styles.module.scss';

export const Contribution = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <h2>Want to Contribute?</h2>
      <p>Submit your artwork and help us make a difference in 2026.</p>
      <Button href={'/'} class={css.btn}>
        Submit Your Art
      </Button>
    </div>
  );
};
