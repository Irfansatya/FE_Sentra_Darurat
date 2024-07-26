import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

export const routes: RouteDefinition[] = [
  {
    path: '/', // Ensure this path is all lowercase
    component: lazy(() => import('./landingpage')), // Ensure the path matches the file name
  },

  {
    path: '/loginpopup', // Ensure this path is all lowercase
    component: lazy(() => import('./LoginPopUp')), // Ensure the path matches the file name
  },

  {
    path: '/registerpopup', // Ensure this path is all lowercase
    component: lazy(() => import('./RegisterPopUp')), // Ensure the path matches the file name
  },

  {
    path: '/beranda', // Ensure this path is all lowercase
    component: lazy(() => import('./beranda')), // Ensure the path matches the file name
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