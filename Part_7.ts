import { Student } from './Student';
import { Database } from "./Database"

const m_dbStudent = new Database<Student>();
const m_Student1 = new Student("A", 21);
m_Student1.addGrade(90);
m_Student1.addGrade(75);
m_Student1.addGrade(70);

const m_Student2 = new Student("B", 19);
m_Student2.addGrade(70);
m_Student2.addGrade(65);
m_Student2.addGrade(80);

const m_Student3 = new Student("C", 23);
m_Student3.addGrade(60);
m_Student3.addGrade(55);
m_Student3.addGrade(80);

m_dbStudent.addEntry(m_Student1);
m_dbStudent.addEntry(m_Student2);
m_dbStudent.addEntry(m_Student3);

const Students = m_dbStudent.getAllEntries();
const m_StudentsFilter = Students.filter(x => x.getAverageGrade() > 75);
const m_StudentMap = m_StudentsFilter.map(x => x.name);
const m_StudentReduce = m_StudentsFilter.reduce((GPA, x) => GPA + x.grades.length, 0);

console.log("Students with an average grade above 75", m_StudentsFilter);
console.log("Name", m_StudentMap);
console.log("Total Number of Grades", m_StudentReduce);