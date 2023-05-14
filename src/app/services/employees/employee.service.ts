import { Injectable } from '@angular/core';
// Import  the HTTP inbuilt client to make calls
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Import the observable to subscribe to
import { Observable } from 'rxjs';
// Import the employee interface
import { Employee } from '../../models/Employee';

// Class variables
// The URL headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Server must be running before this can work
  private employeeUrl: string = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  // Method that will return the list of employees
  // getEmployees(): Employee[] {
  //   return Employees;
  // }

  // The same method can be done using observables for local data
  // getEmployees() : Observable<Employee[]> {
  // To return the observable directly
  //   return of(Employees);

  // To get the employee data using the http client
  getEmployees(): Observable<Employee[]> {

    // Use the http client to get data from the given url
    return this.httpClient.get<Employee[]>(this.employeeUrl);

  }

  // To add a new employee to the list of employees
  addEmployee(employee: Employee): Observable<Employee> {

    return this.httpClient.post<Employee>(this.employeeUrl, employee, httpOptions);

  }

  // To delete an employee from the list
  deleteEmployee(employee: Employee): Observable<Employee> {

    // This new url includes the employee id to help with deleting the employee
    const employeeToDeleteUrl: string = `${this.employeeUrl}/${employee.id}`;

    return this.httpClient.delete<Employee>(employeeToDeleteUrl);

  }

  toggleEmployeeIsPaid(employee: Employee): Observable<Employee> {
    const employeeToUpdateUrl: string = `${this.employeeUrl}/${employee.id}`;

    return this.httpClient.put<Employee>(employeeToUpdateUrl, employee, httpOptions);
  }

}
