import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { routes } from './routes';
import { NotFoundPage } from '@/features';


export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            {routes.public.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
          </Route>
          <Route element={<PrivateRoute />}>
            {routes.private.map((route) => (
              <Route key={route.path} path={route.path} element={<route.element />} />
            ))}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
