import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {


  }

  async signUp(){
    await this.service.signUp(this.user.email,this.user.password);
    this.router.navigate(["login"]);
   
  }
  

}
