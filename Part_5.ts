import { Student } from "./Student";

function createBonusAdder(bonus : number)
{
    return function(grade : number) : number
    {
        return grade + bonus;
    }
}

function bonusAdder(student : Student, bonus : number)
{
    const bonusGrade = createBonusAdder(bonus);
    student.grades = student.grades.map(bonusGrade);
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

bonusAdder(m_Student1, 5);
bonusAdder(m_Student2, 5);
bonusAdder(m_Student3, 5);

console.log(`${m_Student1.name} average grade = ${m_Student1.getAverageGrade()}`);
console.log(`${m_Student2.name} average grade = ${m_Student2.getAverageGrade()}`);
console.log(`${m_Student3.name} average grade = ${m_Student3.getAverageGrade()}`);