import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/home';
import AboutData from './pages/about.data';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/about')),
    data: AboutData,
  },

  {
    path: '/login', // Ensure this path is all lowercase
    component: lazy(() => import('./Login')), // Ensure the path matches the file name
  },

  {
    path: '/register', // Ensure this path is all lowercase
    component: lazy(() => import('./Register')), // Ensure the path matches the file name
  },

  {
    path: '/admin', // Ensure this path is all lowercase
    component: lazy(() => import('./admin')), // Ensure the path matches the file name
  },

  {
    path: '**',
    component: lazy(() => import('./errors/404')),
  },
];