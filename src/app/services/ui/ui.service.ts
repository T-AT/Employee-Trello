import { Injectable } from '@angular/core';
// Import observable and subject to allow content sharing
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// This is the service that will keep track of the form state
export class UiService {

  private showForm:boolean = false;

  // Set up the observable with the object
  private subject: any = new Subject();

  constructor() { }

  // Function to toggle showForm property
  toggleShowForm(): void {

    // Assign the opposite of the toggle state
    this.showForm = !this.showForm;

    // Init the subject
    this.subject.next(this.showForm);

  }

  // Function to be fired when the showForm is toggled
  onToggleShowForm(): Observable<any> {

    return this.subject.asObservable();

  }
}