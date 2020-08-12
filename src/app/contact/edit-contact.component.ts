import { ContactService } from './../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact = new Contact();
  constructor(private service: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.contact.key = params["key"];
      this.contact.id = params["id"];
      this.contact.firstname = params["firstname"];
      this.contact.lastname = params["lastname"];
      this.contact.email = params["email"];
      this.contact.phone = params["phone"];

  });

  }

  save(){
 
    this.service.updateContact(this.contact.key,{firstname: this.contact.firstname, lastname: this.contact.lastname, email: this.contact.email,phone: this.contact.phone});
    this.router.navigate([""])
  }

}
