import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import Titled from '@/components/Titled';
import routes from '@/navigation/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, i) => React.cloneElement(route, { key: i }))}
        <Route
          path={'*'}
          element={
            <Titled title="Page not found">
              <div>Not Found</div>
            </Titled>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
