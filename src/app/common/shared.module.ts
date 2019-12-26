import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './sidemenu/sidemenu.component';
import { TopMenuComponent } from './topmenu/topmenu.component';
@NgModule({
    declarations: [
        SideMenuComponent,
        TopMenuComponent
    ],
    imports: [
        CommonModule, 
        RouterModule, 
        HttpClientModule, 
        FormsModule, 
        ReactiveFormsModule
    ],
    exports: [
        SideMenuComponent,
        TopMenuComponent
    ],
    providers: [
    ]
})
export class SharedModule { }
