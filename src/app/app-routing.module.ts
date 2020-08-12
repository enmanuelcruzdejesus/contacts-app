import { AuthguardService } from './services/auth.service';
import { SendEmailComponent } from './contact/send-email.component';
import { SignupComponent } from './user/signup.component';
import { LoginComponent } from './user/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostContactComponent } from './contact/post-contact.component';
import { EditContactComponent } from './contact/edit-contact.component';
import { ContactListComponent } from './contact/contact-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '' , redirectTo: "/contacts" , pathMatch: 'full'},
  {path:'login' , component: LoginComponent},
  {path:'signup' , component: SignupComponent},
  {path:'contacts' , component: ContactListComponent, canActivate:[AuthguardService]},
  {path:'edit-contact' , component: EditContactComponent},  
  {path:'post-contact' , component: PostContactComponent}, 
  {path:'send-email' , component: SendEmailComponent}, 
  {path: '**' , component: PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const rountingComponents = [ContactListComponent,EditContactComponent,PostContactComponent,PagenotfoundComponent,
LoginComponent,SignupComponent,SendEmailComponent];


