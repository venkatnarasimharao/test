import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardsGuard } from './guards.guard';


const routes: Routes = [
  {
    path : 'test',
    loadChildren: () => import('./testModule/test.module').then(m => m.TestModule),
    // loadChildren:'./testModule/test.module#TestModule',
    data: { roles: ['user', 'rm'] },
    canActivate: [GuardsGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
