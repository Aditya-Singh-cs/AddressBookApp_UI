import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private apiUrl = 'http://localhost:8080/addressbook'; 

  constructor(private http: HttpClient) {}

  // Fetch all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.apiUrl}/showcontacts`);
  }

  // Add a new contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.apiUrl}/create`, contact);
  }

  // Update an existing contact
  updateContact(id: number, contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.apiUrl}/update/${id}`, contact);
  }
  

  // Delete a contact by ID
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}