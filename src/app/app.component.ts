import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-app';
   constructor(private service: UserService, private router: Router){

   }

  showNav(){
    return this.service.IsLoggedIn();
  }
  userLoggedIn(){
    return this.service.IsLoggedIn();
  }
  Logout(){
   this.service.logout();
  this.router.navigate(['login']);
  }
}
