import { Layout } from '@/components';

import { Contribution, FAQ, Head, Mascot, Mission } from './components';

export const About = () => {
  return (
    <Layout>
      <Head />
      <Mascot />
      <Mission />
      <FAQ />
      <Contribution />
    </Layout>
  );
};
