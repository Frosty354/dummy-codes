import React from 'react';
import { Routes as MyRoutes,Route } from 'react-router-dom';
import Page404 from '../Components/Page404';
import { pages } from './Pages';

const Routes = () => {
  return (
    <MyRoutes>
      {pages.map(({ component, path }) => {
            return (
              <Route
                key={path}
                element={
                    <>
                      {component}
                    </>
                }
                path={path}
              />
            );
          })}
          <Route element={<Page404 />} path='*' />
    </MyRoutes>
  );
};

export default Routes;
