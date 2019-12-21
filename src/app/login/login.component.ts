import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  addModel: any = { segment: '' };

  constructor() { }

  ngOnInit() {
  }

  omit_special_number(event: any) {
    // Only Numbers are allowed
    let k;
    k = event.charCode; // k = event.keyCode;  (Both can be used)
    return k >= 48 && k <= 57;
  }

  omit_special_number_with_decimal(event: any) {
    let k;
    k = event.charCode; // k = event.keyCode;  (Both can be used)
    return (k >= 48 && k <= 57) || k === 46;
  }

  omit_special_char(event: any) {
    // Only Charaters are allowed
    let k;
    k = event.charCode; // k = event.keyCode;  (Both can be used)
    return (k >= 65 && k <= 90) || (k >= 97 && k <= 122) || k === 32;
  }

  omit_only_special_char(event: any) {
    // Only Charaters and Numbers are allowed
    let k;
    k = event.charCode; // k = event.keyCode;  (Both can be used)
    return (k >= 65 && k <= 90) || (k >= 97 && k <= 122) || (k >= 48 && k <= 57) || k === 32;
  }

  omit_all_special_char(event: any) {
    // Only Charaters are allowed
    let k;
    k = event.charCode; // k = event.keyCode;  (Both can be used)
    return (k >= 65 && k <= 90) || (k >= 97 && k <= 122) || (k > 32 && k <= 47);
  }
  omit_only_numbers(event: any) {
    // which accept both numbers and letters but not only numbers
    console.log(event, "eve")
    try{
      if (JSON.parse(event)) {
        this.addModel.segment = '';
      }
    }catch (err){
      return
    }
  }

  omit_only_all_numbers(event: any) {
    // which accept both numbers and letters but not only numbers
    try {
      if (JSON.parse(event)) {
        this.addModel.segment = '';
      }
    } catch {
      return
    }
  }
}
