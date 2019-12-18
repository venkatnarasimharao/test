import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';

const route1:Routes =[
    {
        path : 'InterComp1',
        component:Compo1Component
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route1)]
  })
  export class InteractionRoutingModule {}