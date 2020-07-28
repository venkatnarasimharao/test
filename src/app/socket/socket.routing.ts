import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketComponent } from './socket/socket.component';

const route1: Routes = [
    {
        path: 'socket',
        component: SocketComponent
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(route1)]
})
export class SocketRoutingModule { }
