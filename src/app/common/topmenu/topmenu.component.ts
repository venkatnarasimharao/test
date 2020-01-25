import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.styl']
})
export class TopMenuComponent implements OnInit {
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['/login']);
    sessionStorage.clear();
    localStorage.clear();
  }
}
