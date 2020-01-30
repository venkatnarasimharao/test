import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-example-child',
  templateUrl: './input-example-child.component.html',
  styleUrls: ['./input-example-child.component.styl']
})
export class InputExampleChildComponent implements OnInit {
  @Input() dataForChild: any;
  constructor() { }

  ngOnInit() {
  }

}
