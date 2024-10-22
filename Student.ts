export class Student
{
    name : string;
    age : number;
    grades : number[];
    static total : number = 0;

    constructor(name : string, age : number)
    {
        this.name = name;
        this.age = age;
        this.grades = []
        Student.total++;
    }

    addGrade(grade : number) : void
    {
        this.grades.push(grade);
    }

    getAverageGrade() : number
    {
        let sum = 0;
        this.grades.forEach((grade) => {
            sum += grade;
        });
        return sum / this.grades.length;
    }

    static totalStudents() : number
    {
        return Student.total;
    }
}