import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Router, NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  searchTerm: string;
  constructor(private service: ContactService, private router: Router) { }

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
    });
  }

  getContactsByName() {
    this.service.getContactByName(this.searchTerm).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.contacts = data;
      console.log("printing");  
    });
  }


  contactFilter(value: string){
    if(value != undefined && value != null && value != "")
    this.getContactsByName();
    else{
      this.getContacts();
    }
  }


  createContact(){
    this.router.navigate(["post-contact"])
  }

  updateContact(contact: Contact){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "key": contact.key,
          "id": contact.id,
          "firstname": contact.firstname,
          "lastname": contact.lastname,
          "email": contact.email
      }
  };
  
  this.router.navigate(["edit-contact"], navigationExtras);
  }

  deleteContact(task: Contact) {
    this.service.deleteContact(task.key);
  }

}
