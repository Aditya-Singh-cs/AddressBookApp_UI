import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../services/address-book.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private addressBookService: AddressBookService, private router: Router) {}

  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts(): void {
    this.addressBookService.getContacts().subscribe(
      (data: Contact[]) => {
        this.contacts = data;
      },
      (error) => {
        console.error("Error fetching contacts:", error);
      }
    );
  }

  navigateToAddPerson() {
    this.router.navigate(['/add-person']);
  }

  editPerson(contact: Contact) {
    this.router.navigate(['/add-person'], { state: { contact } });
  }

  deletePerson(contact: Contact) {
    if (confirm(`Are you sure you want to delete ${contact.name}?`)) {
      this.addressBookService.deleteContact(contact.id).subscribe(
        () => {
          this.contacts = this.contacts.filter(p => p.id !== contact.id);
          console.log("Contact deleted successfully");
        },
        (error) => {
          console.error("Error deleting contact:", error);
        }
      );
    }
  }
}