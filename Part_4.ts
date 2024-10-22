import { Database } from "./Database"
import { Student } from "./Student";
import { Teacher } from "./Teacher";

const m_dbStudent = new Database<Student>();
const m_Student1 = new Student("A", 21);
const m_Student2 = new Student("B", 19);
m_dbStudent.addEntry(m_Student1);
m_dbStudent.addEntry(m_Student2);
console.log(`Student Entries in Databae: ${m_dbStudent.getAllEntries()}`);

const m_dbTeacher = new Database<Teacher>();
const m_Teacher1 = new Teacher("Who?", 40, "Internet Programming");
const m_Teacher2 = new Teacher("Who?", 40, "Cloud Computing");
m_dbTeacher.addEntry(m_Teacher1);
m_dbTeacher.addEntry(m_Teacher2);
console.log(`Teacher Entries in Databae: ${m_dbTeacher.getAllEntries()}`);