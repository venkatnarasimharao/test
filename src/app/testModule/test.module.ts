import { NgModule } from "@angular/core";
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestRoutingModule } from './test.routing.module';
import { Test2Component } from './test2/test2.component';
import { TestService } from './test.service';
import { DataTableModule } from 'angular-6-datatable';
import { FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SharedModule } from '../common/shared.module';


@NgModule({
    declarations:[
        TestComponent,
        Test2Component,
    ],
    imports:[
        CommonModule,
        TestRoutingModule,
        RouterModule,
        DataTableModule,
        FormsModule,
        MyDatePickerModule,
		AngularMultiSelectModule,
        SharedModule

    ],
    providers:[
        TestService
    ]

})
export class TestModule {}