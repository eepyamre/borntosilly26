import { Layout } from '@/components';

import { Head } from './components';
import css from './styles.module.scss';

export const Privacy = () => {
  return (
    <Layout class={css.wrapper}>
      <Head />
      <div class={css.content}>
        <div class="maxWidth">
          <div class={css.text}>
            <p>
              We don't collect any data automatically. No cookies, no tracking,
              no analytics.
            </p>
            <p>
              The only data we receive is what you voluntarily submit through
              our artwork submission form:
            </p>
            <ul>
              <li>Artist name (optional)</li>
              <li>Artwork files (images, documents, etc.)</li>
            </ul>
            <p>
              This data is used solely for the Born to Silly art project and
              will not be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
