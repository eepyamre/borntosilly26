import cn from 'classnames';

import { Link } from '@/components';

import silly from '@/assets/peeking.png';

import css from './styles.module.scss';

export const ContactsList = () => {
  return (
    <div class={cn(css.wrapper, 'maxWidth')}>
      <img src={silly} class={css.img} alt="Silly" />
      <div class={css.list}>
        <Link href="mailto:poniponi@borntosilly.com">
          poniponi@borntosilly.com
        </Link>
        <Link href="mailto:marelover@borntosilly.com">
          marelover@borntosilly.com
        </Link>
        <span>
          on the{' '}
          <Link href="https://boards.4chan.org/mlp/thread/43068627">
            {' '}
            4chan thread
          </Link>
        </span>
        <span>
          on IRC chat{' '}
          <Link href="http://qchat.rizon.net/?channels=borntosilly">
            irc.rizon.net #borntosilly
          </Link>
        </span>
      </div>
    </div>
  );
};
