import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
    if (JSON.parse(localStorage.getItem('data')) == null) {
      localStorage.setItem('data', JSON.stringify([]));
    }
  }
  ngOnInit() {
  }

}
