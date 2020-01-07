import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { FileUploadingComponent } from './file-uploading/file-uploading.component';

const route1:Routes =[
    {
        path : 'InterComp1',
        component:Compo1Component
    },
    {
        path:'fileupload',
        component:FileUploadingComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route1)]
  })
  export class InteractionRoutingModule {}