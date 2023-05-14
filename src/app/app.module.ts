// Modules 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AboutComponent } from './components/pages/about/about.component';


// Application Routes
const appRoutes: Routes = [
  {
    path : '', // Index or Main route
    component: EmployeesComponent
  },
  {
    path : 'about',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    EmployeesComponent,
    EmployeeItemComponent,
    AddEmployeeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
