import { Component, Input, Output, EventEmitter } from '@angular/core';
// Import the employee interface
import { Employee } from 'src/app/models/Employee';
// Import font awesome icons
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})

// The component to handle logic for each single employee
export class EmployeeItemComponent {

  // Init font awesome icons
  faTimes = faTimes;

  // Local text color
  textColor: string = 'steelblue';

  // Data binding
  @Input() employee!: Employee;
  @Output() deleteEmployeeEmitter: EventEmitter<Employee> = new EventEmitter();
  @Output() toggleEmployeePaidEmitter: EventEmitter<Employee> = new EventEmitter();

  onDeleteEmployee(employee:Employee) {
    // Method that is called when the user clicks the delete fa-icon
    console.log(`Deleted employee ${employee.id}`);

    // When the icon is clicked, emit the employee to the parent 'employees' component
    this.deleteEmployeeEmitter.emit(employee);
  }

  // To toggle the 'isPaid' state of the employee
  togglePaid(employee : Employee): void {

    // When the employee-item is clicked, emit the employee to the parent 'employees' component
    this.toggleEmployeePaidEmitter.emit(employee);
  }

}
