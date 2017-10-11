import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: GlobalService) {
   }
  ngOnInit() {
  }
  checkData(email: string, password: string) {
    const user = JSON.parse(localStorage.getItem('data'));
    console.log(user);
    for ( let i = 0; i < user.length ; i++) {
       if (user[i].email === email && user[i].password === password) {
         this.router.navigate(['/products']);
         this.service.role = false;
         this.service.token = email;
         (<HTMLInputElement>document.getElementById('info')).innerHTML = 'Login Successful !';
      } else {
        (<HTMLInputElement>document.getElementById('info')).innerHTML = 'Login Failed !';
      }
    }
  }
}
