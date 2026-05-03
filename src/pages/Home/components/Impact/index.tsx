import cn from 'classnames';
import { useEffect, useState } from 'preact/hooks';

import { Button } from '@/components/Button';

import css from './styles.module.scss';

export const Impact = () => {
  const [purchases, setPurchases] = useState(0);

  const fetchData = async () => {
    const res = await fetch('/purchases');
    const json = await res.json();
    setPurchases(json.purchases);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <h2 class={css.subtitle}>{purchases}</h2>
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
