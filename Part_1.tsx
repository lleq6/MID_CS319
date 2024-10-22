class Student
{
    name : string;
    age : number;
    grades : number[];
    static totalStudent : number;

    constructor(name : string, age : number)
    {
        this.name = name;
        this.age = age;
        Student.totalStudent++;
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
        return Student.totalStudent;
    }
}

const m_Student1 = new Student("A", 21);
m_Student1.addGrade(90);
m_Student1.addGrade(75);
m_Student1.addGrade(70);
console.log(`${m_Student1.name} average grade = ${m_Student1.getAverageGrade()}`);

const m_Student2 = new Student("B", 19);
m_Student2.addGrade(70);
m_Student2.addGrade(65);
m_Student2.addGrade(80);
console.log(`${m_Student2.name} average grade = ${m_Student2.getAverageGrade()}`);

const m_Student3 = new Student("C", 23);
m_Student3.addGrade(60);
m_Student3.addGrade(55);
m_Student3.addGrade(80);
console.log(`${m_Student3.name} average grade = ${m_Student3.getAverageGrade()}`);