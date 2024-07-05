import { lazy } from 'react';

const Home = lazy(() => import('../features/Home/pages/HomePage'));
const Auth = lazy(() => import('../features/Auth/pages/AuthPage'));
const About = lazy(() => import('../features/About/pages/AboutPage'));

export const routes = {
  private: [
    { path: '/', element: Home, name: 'HOME' },
    { path: '/about', element: About, name: 'ABOUT' },
  ],
  public: [{ path: '/auth', element: Auth, name: 'AUTH' }],
} as const;

export type RouteName = (
  | (typeof routes.public)[number]
  | (typeof routes.private)[number]
)['name'];
