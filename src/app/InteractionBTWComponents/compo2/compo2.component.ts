import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.styl']
})
export class Compo2Component implements OnInit {
  //SampleData :any;

  // This property is bound using its original name.
  @Input() SampleData: any;
  // this property value is bound to a different property name
  // when this component is instantiated in a template.
  @Input('account-id') id: string;

  constructor() { }

  ngOnInit() {
    this.SampleData = [
      { name: 'akrivia', place: 'vizg' },
      { name: 'akrivia', place: 'hyd' },
      { name: 'akrivia', place: 'chennai' },
      { name: 'akrivia', place: 'Delhi' },
    ]
  }

}
