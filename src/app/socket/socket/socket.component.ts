import { Component, OnInit } from "@angular/core";
import { SocketService } from "../socket.service";
import { Socket } from "ngx-socket-io";
@Component({
  selector: "app-socket",
  templateUrl: "./socket.component.html",
  styleUrls: ["./socket.component.styl"],
})
export class SocketComponent implements OnInit {
  notificationCount1: any;
  constructor(public socketservice: SocketService, public socket: Socket) {
    this.notificationCount();
  }

  ngOnInit() {}
  notificationCount() {
    console.log('socket calls');
    this.socketservice.notificationHeaderCount.subscribe((data) => {
      console.log(data, 'notification count');
      this.notificationCount1 = data;
      this.socket.emit('count', 'data venkat');
    });
  }
}
