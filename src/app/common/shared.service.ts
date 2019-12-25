import { Injectable, OnInit } from '@angular/core';
import {AppSettings } from '../app.settings'
import { Headers, Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import * as _ from 'underscore';
// to use map method
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {

  constructor(public _http: Http) {
  }
  ngOnInit() {
    
  }
  loginService(val:any){
    return this._http
    .post(AppSettings.API.USER_LOGIN, val, this.token())
    .map((response: Response) => response.json());
  }
  token() {
    return new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        // Authorization: 'BEARER ' + sessionStorage.getItem('token')
      })
    });
  }
}
