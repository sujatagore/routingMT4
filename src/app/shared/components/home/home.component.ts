import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userRole !: string

  constructor() { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole')!;
  }

}
