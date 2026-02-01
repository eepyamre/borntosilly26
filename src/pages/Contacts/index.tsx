import { Layout } from '@/components';

import { ContactsList, Head } from './components';
import css from './styles.module.scss';

export const Contacts = () => {
  return (
    <Layout class={css.wrapper}>
      <Head />
      <ContactsList />
    </Layout>
  );
};
