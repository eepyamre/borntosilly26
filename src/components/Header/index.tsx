import cn from 'classnames';
import { useLocation } from 'preact-iso';
import { useMemo } from 'preact/hooks';

import logo from '@/assets/logo.webp';

import css from './styles.module.scss';

export const Header = () => {
  const location = useLocation();

  const routes = useMemo(() => {
    return [
      {
        text: 'Home',
        url: '/',
        active: location.path === '/',
      },
      {
        text: 'Archive',
        url: '/archive',
        active: location.path === '/archive',
      },
      {
        text: 'About',
        url: '/about',
        active: location.path === '/about',
      },
      {
        text: 'Contacts',
        url: '/contacts',
        active: location.path === '/contacts',
      },
    ];
  }, [location]);

  return (
    <div class={css.wrapper}>
      <a href="/" className={css.logoWrapper}>
        <img src={logo} alt={'Logo'} class={css.logo} />
      </a>
      <div class={css.links}>
        {routes.map((item) => (
          <a
            href={item.url}
            class={cn(css.link, { [css.active]: item.active })}
            key={item.url}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};
