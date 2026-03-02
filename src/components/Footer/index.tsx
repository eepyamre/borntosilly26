import { Link } from '../Link';
import css from './styles.module.scss';

export const Footer = () => {
  return (
    <div class={css.wrapper}>
      <Link href="/privacy" class={css.link}>
        Privacy Policy
      </Link>
    </div>
  );
};
