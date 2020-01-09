import { Injectable } from '@angular/core';
import {AppSettings } from '../app.settings'
import { Headers, Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import * as _ from 'underscore';
// to use map method
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class InterService {

  constructor(public _http: Http) { }
  submitDocuments(doc:any){
    return this._http
    .post(AppSettings.API.USER_DOCS, doc)
    .map((response: Response) => response.json());
  }
}
