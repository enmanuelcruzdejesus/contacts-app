import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private dbPath = "/contacts"

  private contactsDb: AngularFireList<Contact>;

  constructor(private db: AngularFireDatabase) { 


    this.contactsDb = this.db.list(this.dbPath);


  }


  createContact(contact: Contact){
    this.contactsDb.push(contact).then(value =>{
      console.log(value);
    });
  }

  updateContact(key: string, value: any): Promise<void>{
    return this.contactsDb.update(key,value);

  }

  deleteContact(key: string): Promise<void>{
    return this.contactsDb.remove(key);
  }




  getContact(){
    return new Promise((resolve,reject)=>{
      this.db.list(this.dbPath).valueChanges().subscribe(value=>{
        resolve(value);
      })
    })
  }

  getAllContacts(): AngularFireList<any>{
    return this.db.list(this.dbPath);
    
  }

  getContactByName(value: string): AngularFireList<any>{
   
    return this.db.list(this.dbPath,ref => ref.orderByChild('firstname').equalTo(value));
  }


}
