import cn from 'classnames';
import { useEffect, useRef, useState } from 'preact/hooks';

import { Button } from '@/components/Button';

import css from './styles.module.scss';

export const Impact = () => {
  const [target, setTarget] = useState(1125);
  const [displayed, setDisplayed] = useState('0');
  const rafRef = useRef<number>(0);

  // const fetchData = async () => {
  //   const res = await fetch('/purchases');
  //   const json = await res.json();
  //   setTarget(json.purchases);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (target <= 0) return;

    const duration = 500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      const num = Math.round(eased * target);
      setDisplayed(
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(num),
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return (
    <div class={css.wrapper}>
      <div class={cn(css.content, 'maxWidth')}>
        <div class={css.textWrapper}>
          <h2 class={css.title}>Donation closed</h2>
          <p class={css.description}>
            Every penny was donated to the Kids Rein!
          </p>
          <a
            target={'_blank'}
            href={'https://borntosilly.com/receipt_new.png'}
            class={css.link}
          >
            Click here to see the receipt
          </a>
        </div>
        <div class={css.raised}>
          <h2 class={css.subtitle}>{displayed}</h2>
          <span class={css.text}>Raised Total</span>
          <Button
            target={'_blank'}
            class={css.button}
            href={'https://borntosilly.com/bts.zip'}
          >
            Download the pack
          </Button>
        </div>
      </div>
    </div>
  );
};
