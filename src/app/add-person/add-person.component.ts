import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../services/address-book.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent implements OnInit {
  contact: Contact = {
    id: 0, name: '', phone: '', email: '',
  };
  isEditing: boolean = false;

  constructor(private router: Router, private addressBookService: AddressBookService) {}

  ngOnInit() {
    const navigation = history.state as { contact?: Contact };
    
    if (navigation && navigation.contact) {
      this.contact = { ...navigation.contact };
      this.isEditing = true;
    }
  }

  saveContact() {
    if (!this.contact.name || !this.contact.phone || !this.contact.email) {
      alert("Please fill all fields!");
      return;
    }
  
    if (this.isEditing && this.contact.id) {
      console.log("Updating contact:", this.contact); // Debug log
  
      this.addressBookService.updateContact(this.contact.id, this.contact).subscribe(
        (response) => {
          console.log("Update Response:", response); // Log backend response
          this.router.navigate(['/']);
        },
        (error) => {
          console.error("Error updating contact:", error);
        }
      );
    } else {
      this.addressBookService.addContact(this.contact).subscribe(
        (response) => {
          console.log("Add Response:", response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error("Error adding contact:", error);
        }
      );
    }
  }
  

  resetForm() {
    this.contact = { id: '', name: '', phone: '', email: '' };
  }
}