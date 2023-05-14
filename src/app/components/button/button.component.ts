import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
 
export class ButtonComponent {

  // Data binding
  @Input() btnColor: string = "";
  @Input() btnText: string = ""

  @Output() addEmployeeBtnEmitter: EventEmitter<any> = new EventEmitter();

  addEmployeeBtn() {
    console.log("Add Employee button clicked");

    // But we need to emit the new employee to the parent header component
    this.addEmployeeBtnEmitter.emit();
  }

}