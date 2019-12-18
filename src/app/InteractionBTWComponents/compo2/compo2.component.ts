import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.styl']
})
export class Compo2Component implements OnInit {
  SampleData :any;
  constructor() { }

  ngOnInit() {
    this.SampleData=[
      {name:'akrivia',place:'vizg'},
      {name:'akrivia',place:'hyd'},
      {name:'akrivia',place:'chennai'},
      {name:'akrivia',place:'Delhi'},
    ]
  }

}
