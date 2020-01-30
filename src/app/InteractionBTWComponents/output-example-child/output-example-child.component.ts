import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-example-child',
  templateUrl: './output-example-child.component.html',
  styleUrls: ['./output-example-child.component.styl']
})
export class OutputExampleChildComponent implements OnInit {
  SampleData: any;
  constructor() { }

  ngOnInit() {
    this.SampleData = [
      { name: 'akrivia', place: 'vizg' },
      { name: 'akrivia 1', place: 'hyd' },
      { name: 'akrivia 2', place: 'chennai' },
      { name: 'akrivia 3', place: 'Delhi' },
    ];
  }

}
