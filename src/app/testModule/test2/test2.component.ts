import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as moment from 'moment';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.styl']
})
export class Test2Component implements OnInit {
  phase: any = [];
  selectedItems: any[];
  addModel: any;
  employees: any = [];
  dropdownSettings: { singleSelection: boolean; text: string; selectAllText: string; unSelectAllText: string; enableSearchFilter: boolean; classes: string; badgeShowLimit: number; enableCheckAll: boolean; };
  segments: any;

  constructor() { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Something',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
      badgeShowLimit: 1,
      enableCheckAll: false
    };
    this.phase = [
      {
        id: 1,
        itemName: 'Goals Review'
      },
      {
        id: 2,
        itemName: 'Peer Feedback'
      },
      {
        id: 4,
        itemName: 'Peer Feedback',
      },
      {
        id: 5,
        itemName: '360 Feedback',
      }
      // {
      //   phase_id: 2,
      //   phase: 'Reverse Feedback',
      //   phase_type: 'Self Review',
      //   display_order: 3,
      //   created_at: '2019-01-10 09:35:24',
      //   updated_at: '2019-01-11 03:51:41'
      // },
      // {
      //   phase_id: 4,
      //   phase: 'Peer Feedback',
      //   phase_type: 'Self Review',
      //   display_order: 4,
      //   created_at: '2019-01-10 09:35:24',
      //   updated_at: '2019-01-11 03:51:41'
      // },
      // {
      //   phase_id: 5,
      //   phase: '360 Feedback',
      //   phase_type: 'Self Review',
      //   display_order: 5,
      //   created_at: '2019-01-10 09:35:24',
      //   updated_at: '2019-01-11 03:51:41'
      // }
    ]
    this.employees = [
      {
        "emp_id": 123,
        "emp_name": "nar"
      },
      {
        "emp_id": 124,
        "emp_name": "nar1"
      },
      {
        "emp_id": 123,
        "emp_name": "nar"
      },
    ]
    this.segments = [
      {
        name: 'sa',
        status: 1
      },
      {
        name: 'ka',
        status: 0
      },
    ]
  }



  // on select of one element deselct of other elemets
  onItemSelect(event: any) {
    console.log(event, "event");
    console.log(this.selectedItems, "this.selectedItems")
    this.selectedItems.forEach((ele: any) => {
      if (ele.id === 2 || ele.id === 4) {
        this.selectedItems.forEach((item: any, i: any) => {
          if (item.id === 5) {
            this.selectedItems.splice(i, 1);
          }
        });
      }
    });
    if (event.id === 5) {
      for (let i = this.selectedItems.length - 1; i >= 0; i--) {
        if (this.selectedItems[i].id === 2 || this.selectedItems[i].id === 4) {
          this.selectedItems.splice(i, 1);
        }
      }
      this.phase.forEach((ele: any) => {
        if (ele.id === 5) {
          this.selectedItems.push(ele);
        }
      });
    }
  }
  openEdit(value: any) {
    this.selectedItems = [];
    this.addModel['reviewName'] = value['pt_name'];
    this.addModel['pt_id'] = value['pt_id'];
    value.phases.forEach((element: any) => {
      const a = _.findLastIndex(this.phase, {
        id: parseInt(element, 0)
      });
      // if (a !== -1) {
      this.selectedItems.push(this.phase[a]);
      // }
    });
  }

  //  task  for inactive status keeping down
  inactiveElem() {
    //for inactive down
    this.segments.sort(function (a: any, b: any) {
      return a.status - b.status;
    });
    this.segments.reverse()

  }

  // add and subtract or previous day and next day of current date
  preNxtDays() {
    let currentDate1 = moment(new Date())
      .subtract(1, 'days')
      .format('YYYY-MM-DD')
    let currentDateNxt = moment(new Date())
      .add(1, 'days')
      .format('YYYY-MM-DD')
  }


  //task of unique elemets in array 
  UniqueElements() {
    this.employees = _.uniq(this.employees, (item1: any) => {
      return item1.emp_id;
    });
  }
}
