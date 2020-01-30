import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { InteractionRoutingModule } from './Interaction-routing';
import { FileUploadingComponent } from './file-uploading/file-uploading.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { InterService } from './inter.service';
import { SharedModule } from '../common/shared.module';
import { InputExampleComponent } from './input-example/input-example.component';
import { InputExampleChildComponent } from './input-example-child/input-example-child.component';
import { OutputExampleChildComponent } from './output-example-child/output-example-child.component';
import { OutputExampleComponent } from './output-example/output-example.component';


@NgModule({
    declarations: [
        Compo1Component,
        Compo2Component,
        FileUploadingComponent,
        InputExampleComponent,
        InputExampleChildComponent,
        OutputExampleChildComponent,
        OutputExampleComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule,
        InteractionRoutingModule,
        MyDatePickerModule,
        ToastrModule,
        SharedModule
    ],
    providers: [
        InterService
    ]

})
export class InteractionBTWComponents { }