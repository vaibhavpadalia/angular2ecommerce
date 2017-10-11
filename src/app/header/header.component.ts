import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: GlobalService) { }
  ngOnInit() {
  }
  doThis() {
    this.service.role = true;
    this.service.token = '';
  }
}
