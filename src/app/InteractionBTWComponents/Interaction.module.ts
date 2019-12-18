import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { InteractionRoutingModule } from './Interaction-routing';


@NgModule({
    declarations:[
        Compo1Component,
        Compo2Component
    ],
    imports:[
        CommonModule,
        RouterModule,
        DataTableModule,
        FormsModule,
        InteractionRoutingModule,
        MyDatePickerModule,

    ],
    providers:[

    ]

})
export class InteractionBTWComponents {}