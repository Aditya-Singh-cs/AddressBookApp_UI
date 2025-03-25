import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddPersonComponent } from './add-person/add-person.component';

const routes: Routes = [
  { path: '', component: AddressBookComponent},
  { path: 'add-person', component: AddPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }