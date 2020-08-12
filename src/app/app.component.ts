import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-app';
   constructor(private service: UserService){

   }

  showNav(){
    return true;
  }
  userLoggedIn(){
    return this.service.IsLoggedIn();
  }
  Logout(){
   this.service.logout();
  }
}
