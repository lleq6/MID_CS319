import {Student} from './Student';
import {Person} from './Person';

export class Teacher extends Person
{
    subject : string;
    students : Student[];

    constructor(name : string, age : number, subject : string)
    {
        super(name, age);
        this.subject = subject;
        this.students = [];
    }

    assignGrades(student : Student, grade : number) : void
    {
        console.log(`(${this.subject}) ${this.name} assign grade to ${student.name} = ${grade}`);
        student.addGrade(grade);
    }
}