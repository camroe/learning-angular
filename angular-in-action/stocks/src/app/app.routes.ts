/*
This file’s main purpose is to configure the routes for the application
 */

import {RouterModule, Routes} from '@angular/router';
// Imports App components that are linked to a route
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ManageComponent} from './components/manage/manage.component';

// Defines a route configuration array
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage',
    component: ManageComponent
  }
];

// Exports the routes for use.We export this so we can import it into our App module and register it.
export const AppRoutes = RouterModule.forRoot(routes);
