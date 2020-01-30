import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.styl']
})
export class InputExampleComponent implements OnInit {
  childLoad: any = 'parentload';
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
