import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-contact',
  templateUrl: './post-contact.component.html',
  styleUrls: ['./post-contact.component.css']
})
export class PostContactComponent implements OnInit {

  contacts: Contact[];
  contact = new Contact();
  id : number;
  constructor(private service: ContactService, private router:Router) { }

  ngOnInit(): void {

   this.getContacts();
  
  
  }

  getContacts() {
    this.service.getAllContacts().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.contacts = data;
      console.log("printing");    
      this.id = this.contacts.length + 1;
      this.contact.id  = this.id.toString();
      console.log(this.id);
    });
  }
  cancelPost(){
    this.contact = new Contact();
  }

  save(){
    this.service.createContact(this.contact);
    this.router.navigate(['']);
  }

}
