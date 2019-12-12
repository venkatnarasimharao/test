import { NgModule } from "@angular/core";
import { TestComponent } from './test/test.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestRoutingModule } from './test.routing.module';
import { Test2Component } from './test2/test2.component';
import { TestService } from './test.service';

@NgModule({
    declarations:[
        TestComponent,
        Test2Component,
    ],
    imports:[
        CommonModule,
        TestRoutingModule,
        RouterModule
    ],
    providers:[
        TestService
    ]

})
export class TestModule {}