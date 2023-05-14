// This is the interface that will hold the object structure of a Task
import { SEX } from './SEX'

export interface Employee{

    // Employee properties
    id? : number,
    employeeName: string,
    employeeAge: number,
    employeeGender: SEX,
    employeeEmail: string,
    employeePosition: string,
    isPaid: boolean

}