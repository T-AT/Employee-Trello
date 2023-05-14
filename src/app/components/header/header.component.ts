import { Component, Input } from '@angular/core';
// Import the UI service to keep track of the showForm state
import { UiService } from 'src/app/services/ui/ui.service';
// Import subscription to consume the service subject
import { Subscription } from 'rxjs';
// Import the router to determine the current route
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Input() appTitle:string = 'Employee Tracker';

  // Component properties
  showAddEmployeeForm!: boolean;
  subscription!: Subscription;

  // Constructor to init the service
  constructor(
    private uiService:UiService,
    private router:Router
  ){

    // Set up a subscription to the service
    this.subscription = this.uiService.onToggleShowForm().subscribe(
      // The subscription returns a value (T/F) which is assigned to the show form property
      state => {
        this.showAddEmployeeForm = state;
      }

    )

  }

  // Function called when the add employee btn is clicked
  toggleAddEmployeeForm() {

    this.uiService.toggleShowForm();

  }

  toggleRoute(route:string){

    // This will return a TRUE/FALSE value that we can use to determine if the button should be displayed
    return this.router.url === route;
  }

}
