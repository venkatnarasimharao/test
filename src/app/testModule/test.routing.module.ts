import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const route:Routes =[
    {
        path : 'test',
        component:TestComponent
    },
    {
        path:'test2',
        component:Test2Component
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route)]
  })
  export class TestRoutingModule {}