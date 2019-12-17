import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { IMyDpOptions } from 'mydatepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.styl']
})
export class TestComponent implements OnInit {
  CalendarData: any = [];
  public filterQuery: any = '';
  public rowsOnPage = 25;
  public sortBy = '';
  public sortOrder = 'asc';

  date:any;
  name:any;

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd', // dd-mmm-yyyy
    editableDateField: false,
    showTodayBtn: true,
    sunHighlight: true,
    satHighlight: false,
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    inline: false,
    selectorHeight: '232px',
    selectorWidth: '252px',
    height: '34px',
    width: '100%',
    todayBtnTxt: 'Today',
    componentDisabled: false,
    showClearDateBtn: true,
    openSelectorOnInputClick: true,
    disableUntil: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate() - 1
    }
  };

  constructor(public testService: TestService) { }

  ngOnInit() {
    this.getCalendar();
  }
  getCalendar() {
    this.testService.getCalendarDeatils().subscribe(data => {
      this.CalendarData = data.result
      this.CalendarData.forEach((ele:any) => {
        if(ele.name == ''){
          ele.name = 'Akrivia Test'
        }
      });
      // console.log(this.CalendarData,'CalendarData');
    });
  }
  postCalendar(){
    let obj ={
      name : this.name,
      dt: moment(this.date.formatted).format('YYYY-MM-DD')
    }
    this.testService.postCalendar(obj).subscribe(data =>{
      if(data.success){
        console.log("success");
        this.getCalendar();
      }
    })
  }
}
