import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { SEX } from 'src/app/models/SEX';
// Import UiService to keep track of the showForm property
import  { UiService } from '../../services/ui/ui.service';
// Import Subscription
import { Subscription } from 'rxjs';

// Const variable to hold the employee sex
let sex: SEX;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  // Local variables
  showAddEmployeeForm !: boolean;
  subscription !: Subscription;

  // Data binding
  @Output() newEmployeeEmitter : EventEmitter<Employee> = new EventEmitter();

  // Form input variables
  employeeName!: string;
  employeeAge!: string;
  employeeGender!: string;
  employeeEmail!: string;
  employeePosition!: string;
  isPaid: boolean = false;

  // Init the UiService in the constructor
  constructor(
    private uiService: UiService
  ){
    // Here we use the subscription to get the value of the showForm property
    this.subscription = this.uiService.onToggleShowForm().subscribe(

      // Returns a true or false form state
      state => {
        this.showAddEmployeeForm = state;
      }

    )
  }


  // Method called when the form is submitted (ngSubmit)
  submitForm() {

    // Form validation
    if (!this.employeeName || !this.employeeAge || !this.employeeGender || !this.employeeEmail || !this.employeePosition) {
      alert("All fields are required");
      return;
    }

    // Check for gender
    // if (this.employeeGender.toString().trim().toLowerCase() !== "male" || this.employeeGender.trim().toLowerCase() !== "female") {
    //   console.log(this.employeeGender);
    //   alert("Gender must be male or female");
    //   return;
    // }

    if (this.employeeGender.trim().toLowerCase() === "male") {
      sex = SEX.MALE;
    } else if (this.employeeGender.trim().toLowerCase() === "female") {
      sex = SEX.FEMALE;
    }

    // Convert age to number
    const employeeIntAge = Number.parseInt(this.employeeAge);

    // If form is valid
    // Create a new employee
    const newEmployee: Employee = {
      id: 10,
      employeeName: this.employeeName,
      employeeAge: employeeIntAge,
      employeeGender: sex,
      employeeEmail: this.employeeEmail,
      employeePosition: this.employeePosition,
      isPaid: this.isPaid
    }

    // We are adding new employees in the parent 'employees' component
    // Therefore we must emit the new employee
    this.newEmployeeEmitter.emit(newEmployee);

    // If emission is successful, Clear the form
    this.employeeName = '';
    this.employeeAge = '';
    this.employeeGender = '';
    this.employeeEmail = '';
    this.employeePosition = '';
    this.isPaid = false;

  }

}
