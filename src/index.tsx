import '@/styles.scss';
import {
  LocationProvider,
  Route,
  Router,
  hydrate,
  prerender as ssr,
} from 'preact-iso';

import { About, Archive, Home, NotFound } from './pages';

export const routes = {
  ['/']: Home,
  ['/archive']: Archive,
  ['/about']: About,
};

export const App = () => {
  return (
    <LocationProvider>
      <Router>
        {Object.entries(routes).map(([key, value]) => (
          <Route key={key} path={key} component={value} />
        ))}
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
};

if (typeof window !== 'undefined') {
  hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
