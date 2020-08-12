import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { JsonPipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  private contactsDb: AngularFireList<User>;
  private isLoggedIn :boolean;

  constructor(private firebaseAuth : AngularFireAuth ) { 

  }

  async login(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password).then(res=>{
      this.isLoggedIn = true;
      console.log(res);
      localStorage.setItem('user',JSON.stringify(res.user));

    });
  }

  async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password).then(res=>{    
      localStorage.setItem('user',JSON.stringify(res.user));

    });
  }



   logout(): void{
     this.isLoggedIn = false;
   this.firebaseAuth.signOut();
   localStorage.removeItem("user");
  }





  IsLoggedIn(){
    return this.isLoggedIn;
  }




  

}
