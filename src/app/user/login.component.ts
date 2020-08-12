import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

 async Login(){
   await this.service.login(this.user.userid,this.user.password);
   
  }

}
