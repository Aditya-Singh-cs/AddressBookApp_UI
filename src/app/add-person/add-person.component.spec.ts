import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonComponent } from './add-person.component';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPersonComponent]
    });
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});