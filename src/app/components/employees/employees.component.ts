import { Component, OnInit } from '@angular/core';
// Import the servia that holds the employee data
import { EmployeeService } from '../../services/employees/employee.service';
// The employee interface
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

// This is the main employee component
export class EmployeesComponent implements OnInit {

  // Variable to hold the list of employees
  employeeCount!:number;
  employees: Employee[] = [];  // Init it into an empty array

  // Constructor
  // Services are added as parameters to the constructor
  constructor(private employeeService: EmployeeService) {
    // This is where we define services
  }

  // On initialization
  ngOnInit(): void {
    // We initialize services here
    // Here we can initialize the employee service
    // this.employees = this.EmployeeService.getEmployees();

    this.employeeService.getEmployees().subscribe(
      gottenEmployees => {
        this.employeeCount = gottenEmployees.length;
        this.employees = gottenEmployees;
        console.log(this.employeeCount);
      }
    );
  }

  // The delete employee function called after the employee has been emitted
  deleteEmployee(employee: Employee) {

    // We need to delete the employee from the service holding the employee list
    this.employeeService.deleteEmployee(employee).subscribe(
      () => {

        // Update user that the employee has been deleted
        alert(`${employee.employeeName} has been deleted from the payroll!`)

        // We then need to remove the employee from UI
        this.employees.filter(
          emp => {
            return emp.id !== employee.id
          }
        )

      }
    )

  }

  toggleEmployeePaid(employee: Employee) {

    // Function to be triggered when the employee item is double clicked
    // Set the isPaid state to the opposite
    employee.isPaid = !employee.isPaid;
    this.employeeService.toggleEmployeeIsPaid(employee).subscribe(
      () => {
        console.log("Updated");
      }
    )

  }

  // To add a new employee to the list of employees
  addEmployee(employee: Employee): void {

    // Call the addEmployee method from the service
    this.employeeService.addEmployee(employee).subscribe(
      employee => {

        // Then add the employee to the list of employees
        this.employees.push(employee);

        // Inform the user of the update
        alert(`New employee ${employee.employeeName} has been added!`)

      });

  }

}
