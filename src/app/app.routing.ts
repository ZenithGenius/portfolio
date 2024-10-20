import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    title:
      'Benny Joumessi Jason Portfolio - Website to see projects and experiences of Benny Joumessi Jason',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/home/home.component'),
    title:
      'Benny Joumessi Jason Portfolio - Website to see projects and experiences of Benny Joumessi Jason',
  },
];
