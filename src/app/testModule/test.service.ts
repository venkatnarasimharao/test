import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { AppSettings } from '../app.settings';
// to use map method
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public _http: Http) { }

  getCalendarDeatils() {
    return this._http
      .get(AppSettings.API.GET_CALENDAR_DETAILS, this.token())
      //to get data with json    how we send
      .map((response: Response) => response.json());
  }
  postCalendar(val:any){
    return this._http
          .post(AppSettings.API.POST_CALENDAR_DATA,val,this.token())
          .map((response:Response)=>response.json());
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
