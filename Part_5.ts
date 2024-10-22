import { Student } from "./Student";

function createBonusAdder(bonus : number)
{
    return function(grade : number) : number
    {
        return grade + bonus;
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

const Bonus = createBonusAdder(5);
m_Student1.grades = m_Student1.grades.map(Bonus);
m_Student2.grades = m_Student2.grades.map(Bonus);
m_Student3.grades = m_Student3.grades.map(Bonus);

console.log(`${m_Student1.name} average grade = ${m_Student1.getAverageGrade()}`);
console.log(`${m_Student2.name} average grade = ${m_Student2.getAverageGrade()}`);
console.log(`${m_Student3.name} average grade = ${m_Student3.getAverageGrade()}`);