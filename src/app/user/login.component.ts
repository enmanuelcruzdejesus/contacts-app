import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

 async Login(){
   await this.service.login(this.user.email,this.user.password);
    this.router.navigate(["contacts"]);
   
  }

}
