import { Layout } from '@/components';

import { Contribution, Head, Mascot, Mission } from './components';

export const About = () => {
  return (
    <Layout>
      <Head />
      <Mascot />
      <Mission />
      <Contribution />
    </Layout>
  );
};
