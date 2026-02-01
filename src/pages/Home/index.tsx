import { Layout } from '@/components';

import { Head, Impact, Upload } from './components';
import css from './styles.module.scss';

export const Home = () => {
  return (
    <Layout class={css.wrapper}>
      <Head />
      <Upload />
      <Impact />
    </Layout>
  );
};
