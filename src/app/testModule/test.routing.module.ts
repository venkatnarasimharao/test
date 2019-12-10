import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const route:Routes =[
    {
        path : 'test',
        component:TestComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route)]
  })
  export class TestRoutingModule {}