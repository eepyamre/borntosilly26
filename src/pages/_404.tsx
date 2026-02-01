import { Layout } from '@/components';

import css from './_404.module.scss';

export const NotFound = () => {
  return (
    <Layout>
      <div class={css.wrapper}>
        <h1 class={css.title}>404</h1>
        <p class={css.text}>Page not found</p>
      </div>
    </Layout>
  );
};
