class Student
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
        let sum = this.grades.reduce((sum, grade) => {
            return sum + grade;
        }, 0);
        return sum / this.grades.length;
    }

    static totalStudents() : number
    {
        return Student.total;
    }
}