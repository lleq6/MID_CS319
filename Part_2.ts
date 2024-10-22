import { Student } from './Student';
import { Teacher } from './Teacher';

const m_Teacher = new Teacher("Who?", 40, "Internet Programming");
const m_Student = new Student("A", 21);
m_Teacher.assignGrades(m_Student, 85);