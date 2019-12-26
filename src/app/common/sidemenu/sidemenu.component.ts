import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.styl']
})
export class SideMenuComponent implements OnInit {
  year:any;
  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

}
