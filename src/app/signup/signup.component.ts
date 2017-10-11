import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userData: any[] = [];
  constructor() {
   }

  ngOnInit() {
  }
  onSignup(name: string, email: string, password: string, phone: number, dob: Date) {
    let count = 0;
    const user = JSON.parse(localStorage.getItem('data'));
    console.log(user); // Testing purpose only
    if (user.length === 0 ) {
      const abc = { name: name, email: email, password: password, phone: phone, dob: dob };
        user.push(abc);
        localStorage.setItem('data', JSON.stringify(user));
        (<HTMLInputElement>document.getElementById('info')).innerHTML = 'Signup Successful !';
    } else {
        for (let i = 0 ; i < user.length; i++ ) { if (user[i].email === email) { count++; }}
        if ( count < 1 ) {
        const abc = { name: name, email: email, password: password, phone: phone, dob: dob };
        user.push(abc);
        localStorage.setItem('data', JSON.stringify(user));
        (<HTMLInputElement>document.getElementById('info')).innerHTML = 'Signup Successful !';
        } else {
          (<HTMLInputElement>document.getElementById('info')).innerHTML = 'Signup failed !';
        }
        }
    }
  }
