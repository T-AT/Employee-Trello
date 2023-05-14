import { Employee } from "./models/Employee";
import { SEX } from "./models/SEX";

// This is mock data about emlpoyees that will eventually come from the JSON server
export const Employees: Employee[] = [

    {
        id: 1,
        employeeName: 'Quys',
        employeeAge: 21,
        employeeGender: SEX.MALE,
        employeeEmail: "dracu1st@gmail.com",
        employeePosition: "Junior Developer",
        isPaid: true
    },
    {
        id: 2,
        employeeName: 'Syuq',
        employeeAge: 18,
        employeeGender: SEX.MALE,
        employeeEmail: "tatd.wine@gmail.com",
        employeePosition: "Senior Developer",
        isPaid: false
    },
    {
        id: 3,
        employeeName: 'Tom',
        employeeAge: 38,
        employeeGender: SEX.MALE,
        employeeEmail: "tom@gmail.com",
        employeePosition: "Company CEO",
        isPaid: true
    },
    {
        id: 4,
        employeeName: 'Jerry',
        employeeAge: 24,
        employeeGender: SEX.FEMALE,
        employeeEmail: "jerry@gmail.com",
        employeePosition: "Janitor",
        isPaid: false
    },
    {
        id: 5,
        employeeName: 'Vim',
        employeeAge: 21,
        employeeGender: SEX.FEMALE,
        employeeEmail: "vim@gmail.com",
        employeePosition: "Chairperson",
        isPaid: true
    }

]
