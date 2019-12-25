import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  temp = false;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.temp = !this.temp;
    console.log(this.temp);
  }

}
