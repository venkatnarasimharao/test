import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardsGuard } from './guards.guard';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path : 'test',
    loadChildren: () => import('./testModule/test.module').then(m => m.TestModule),
    // loadChildren:'./testModule/test.module#TestModule',
    data: { roles: ['user', 'rm'] },
    canActivate: [GuardsGuard]
  },
  {
    path :'InteractionBTWcomp',
    loadChildren: () => import ('./InteractionBTWComponents/Interaction.module').then(n => n.InteractionBTWComponents),
    // canActivate: [GuardsGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    data: { roles: ['MASTER', 'user','admin'] },
    canActivate: [GuardsGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
