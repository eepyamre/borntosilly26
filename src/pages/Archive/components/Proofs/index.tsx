import { ZoomIn } from '@/icons/ZoomIn';
import cn from 'classnames';

import { Button } from '@/components';

import receipt1 from '@/assets/receipts/r0.png';
import receipt2 from '@/assets/receipts/r1.jpg';
import receipt3 from '@/assets/receipts/r1.png';

import css from './styles.module.scss';

export const Proofs = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <div class={css.content}>
        <div class={css.col}>
          <h2 class={css.title}>Receipt</h2>

          <a class={css.imgWrapper} href={receipt3} target={'_blank'}>
            <img class={css.img} src={receipt3} alt={'Receipt'} />
            <ZoomIn class={css.zoom} />
          </a>
        </div>
        <div class={css.col}>
          <h3 class={css.subtitle}>
            Individual donations from the thread anons
          </h3>
          <div class={css.list}>
            <a class={css.imgWrapper} href={receipt1} target={'_blank'}>
              <img class={css.img} src={receipt1} alt={'Receipt'} />
              <ZoomIn class={css.zoom} />
            </a>
            <a class={css.imgWrapper} href={receipt2} target={'_blank'}>
              <img class={css.img} src={receipt2} alt={'Receipt'} />
              <ZoomIn class={css.zoom} />
            </a>
          </div>
        </div>
      </div>
      <Button href={'https://2025.borntosilly.com'} target={'_blank'}>
        Visit the 2025 site
      </Button>
    </div>
  );
};
