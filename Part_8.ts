import { Student } from "./Student";

function parseJSONData(jsonData : string): Student | string 
{
    try 
    {
        const Parse = JSON.parse(jsonData);
        const m_Student = new Student(Parse.name, Parse.age);
        Parse.grades.forEach((grade : number) => m_Student.addGrade(grade));
        return m_Student;
    } 
    catch (ex) 
    {
        return `Error : ${ex}`;
    }
}

const JSON_1 = '{"name": "A", "age": 21, "grades": [90, 75, 70]}';
const JSON_2 = '{"name" "A", "age": 19, "grades": [70, 65, 80]}';
console.log("Result: ", parseJSONData(JSON_1));
console.log("Error: ", parseJSONData(JSON_2));