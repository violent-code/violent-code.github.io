import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import LoadingSpinner from '../components/LoadingSpinner';

export const RouteManager = React.memo(() => {
  return (
    <Routes>
      {Object.entries(routeConfig).map(([key, route]) => {
        const { component: Component, path } = route;
        return (
          <Route
            key={key}
            path={path}
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Component />
              </Suspense>
            }
          ></Route>
        );
      })}
    </Routes>
  );
});

RouteManager.displayName = 'RouteManager';
