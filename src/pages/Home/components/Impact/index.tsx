import cn from 'classnames';
import { useEffect, useRef, useState } from 'preact/hooks';

import { Button } from '@/components/Button';

import css from './styles.module.scss';

export const Impact = () => {
  const [target, setTarget] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<number>(0);

  const fetchData = async () => {
    const res = await fetch('/purchases');
    const json = await res.json();
    setTarget(json.purchases);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (target <= 0) return;

    const duration = 500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setDisplayed(Math.round(eased * target));

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
          <h2 class={css.title}>Uploads are closed</h2>
          <p class={css.description}>
            You can buy the pack and support Kids Rein today!
          </p>
        </div>
        <div class={css.raised}>
          <h2 class={css.subtitle}>{displayed}</h2>
          <span class={css.text}>Packs sold</span>
          <Button
            class={css.button}
            href={'https://www.fatfreecartpro.com/i/14ozo?card'}
          >
            Buy the pack
          </Button>
        </div>
      </div>
    </div>
  );
};
