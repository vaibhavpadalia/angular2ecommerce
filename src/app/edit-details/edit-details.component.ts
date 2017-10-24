import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  name: string;
  email: string;
  phone: number;
  password: string;
  dob: Date;
  constructor(private service: GlobalService) {
  }
  ngOnInit() {
    console.log("in ng on it"); // For Testing purposes only
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
  updateValues(name: string, password: string, dob: Date, phone: number) {
    const user = JSON.parse(localStorage.getItem('data'));
    console.log('before editing', user); // For Testing purposes only
    for (let i = 0; i < user.length; i++) {
      console.log('in for', user[i], this.service.token); // For Testing purposes only
      if (this.service.token === user[i].email) {
        console.log('in if', user[i]); // For Testing purposes only
        user[i].name = name;
        user[i].phone = phone ;
        user[i].password = password;
        break;
      }
  }
    console.log('after editing', user); // For Testing purposes only
    localStorage.setItem('data', JSON.stringify(user));
  }
}
