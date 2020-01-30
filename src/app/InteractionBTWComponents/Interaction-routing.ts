import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { FileUploadingComponent } from './file-uploading/file-uploading.component';
import { InputExampleComponent } from './input-example/input-example.component';
import { OutputExampleChildComponent } from './output-example-child/output-example-child.component';

const route1: Routes = [
    {
        path: 'InterComp1',
        component: Compo1Component
    },
    {
        path: 'fileupload',
        component: FileUploadingComponent
    },
    {
        path: 'inputParent',
        component: InputExampleComponent
    },
    // if we keep Input or output in path of router it is not opening the component ex (Output_Child)
    {
        path: 'output_child',
        component: OutputExampleChildComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route1)]
})
export class InteractionRoutingModule { }