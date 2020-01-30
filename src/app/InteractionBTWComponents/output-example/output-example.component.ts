import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-example',
  templateUrl: './output-example.component.html',
  styleUrls: ['./output-example.component.styl']
})
export class OutputExampleComponent implements OnInit {
  @Output() dataToParent: any;
  constructor() { }

  ngOnInit() {
    console.log(this.dataToParent)
  }

}
