import { Route } from 'react-router';

import { NotAuthenticated } from '@/components/auth/NotAuthenticated';
import { Titled } from '@/components/Titled';

import { routesPaths } from './routesPaths';

export const routes = [
  <Route
    key={routesPaths.HOME}
    path={routesPaths.HOME}
    element={
      <NotAuthenticated>
        <Titled title="Home">
          <div>Home</div>
        </Titled>
      </NotAuthenticated>
    }
  />,
];
