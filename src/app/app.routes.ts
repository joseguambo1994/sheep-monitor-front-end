import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard-page.component').then(
        (module) => module.DashboardPageComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];