import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket/socket.component';
import { SocketRoutingModule } from './socket.routing';
import { RouterModule } from '@angular/router';
import { SocketService } from './socket.service';

@NgModule({
  declarations: [
    SocketComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SocketRoutingModule
  ],
  providers: [
    SocketService
]
})
export class SocketModule { }
