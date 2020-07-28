import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestOptions,
  Response,
  ResponseContentType,
} from '@angular/http';
import * as _ from 'underscore';
import { BehaviorSubject } from 'rxjs';
import { Socket } from 'ngx-socket-io';;

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(public socket: Socket) {}
  notificationCount = new BehaviorSubject(null);
  notificationHeaderCount = this.notificationCount.asObservable();
}
