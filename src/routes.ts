import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

export const routes: RouteDefinition[] = [
  {
    path: '/homepage', // Ensure this path is all lowercase
    component: lazy(() => import('./homepage')), // Ensure the path matches the file name
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