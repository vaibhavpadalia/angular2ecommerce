import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  name: string;
  email: string;
  phone: number;
  password: string;
  dob: Date;
  constructor(private service: GlobalService) {
    const user = JSON.parse(localStorage.getItem('data'));
    for (let i = 0; i < user.length; i++) {
      if (this.service.token === user[i].email) {
        this.name = user[i].name;
        this.email = user[i].email;
        this.phone = user[i].phone;
        this.password = user[i].password;
        this.dob = user[i].dob;
      }
    }
   }

  ngOnInit() {
  }

}
