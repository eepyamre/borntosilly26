import cn from 'classnames';

import { Button } from '@/components';

import list1 from '@/assets/list1.png';
import list2 from '@/assets/list2.png';
import list3 from '@/assets/list3.jpg';
import list4 from '@/assets/list4.png';

import css from './styles.module.scss';

export const Upload = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <div class={css.listWrapper}>
        <h2 class={css.title}>Last Year's art</h2>
        <img src={list1} class={css.img} />
        <img src={list2} class={css.img} />
        <img src={list3} class={css.img} />
        <img src={list4} class={css.img} />
      </div>
      <div class={css.col}>
        <div class={css.upload}>
          <h3 class={css.uploadTitle}>Submit</h3>
          <h3 class={css.uploadDescription}>Your artwork belongs here.</h3>
          <div class={css.submitWrapper}>
            <div class={css.grid}>
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
              <div class={css.gridItem} />
            </div>
            <div class={css.submitInner}>
              <p class={css.dropText}>DROP FILES HERE</p>
              <button class={css.button}>OR BROWSE</button>
            </div>
          </div>
          <div class={css.inputWrapper}>
            <label class={css.label}>
              <span>Artist Name (optional)</span>
              <input
                class={css.input}
                placeholder={'Leave blank for anonymous'}
              />
            </label>
            <button class={cn(css.button, css.buttonSubmit)}>
              Submit artwork
            </button>
          </div>
        </div>
        <div class={css.downloadWrapper}>
          <h3 class={css.uploadTitle}>Or download the last year pack</h3>
          <Button
            href={'https://borntosilly.com/borntosilly.zip'}
            download={'borntosilly2025.zip'}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};
