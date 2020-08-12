import { UserService } from './services/user.service';
import { ContactService } from './services/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, rountingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login.component';
import { ContactListComponent } from './contact/contact-list.component';
import { EditContactComponent } from './contact/edit-contact.component';
import { PostContactComponent } from './contact/post-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './user/signup.component';
import { SendEmailComponent } from './contact/send-email.component';


@NgModule({
  declarations: [
    AppComponent,
    rountingComponents,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [ContactService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
