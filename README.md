# Part 1
เป็นการสร้าง Constructor ของ Class Student เพื่อกำหนด Properties: name, age, grades
เพื่อคำนวณ Average Grade ของ Student แต่ละคน
`Bonus` เก็บจำนวนการสร้าง Object ของ Class Student เพื่อแสดง Total Students

# Part 2
เป็นการสร้าง Class Person เพื่อกำหนด Properties: name, age และสืบทอด (Extends) ใน Class Teacher
และ Class Teacher มีการสร้าง Constructor เพื่อกำหนด Properties: subject, students
และสร้างฟังก์ชัน assignGrades เพื่อให้เกรดกับนักเรียน ของ Class Student

# Part 3
เป็นการสร้าง Interface ของ Class Admin และสร้างฟังก์ชันตามที่เรากำหนดขึ้นเองได้
เช่นในโค้ดมีการสร้างฟังก์ชัน getAdminInfo เพื่อแสดง Name และ Department

# Part 4
เป็นการสร้าง Generic ที่รองรับประเภทของ Class หรือตัวแปรต่างๆ ได้ โดยใน Class Database
มีการสร้างฟังก์ชัน addEntry() เพื่อ Push ข้อมูลลงใน Array โดยใช้ฟังก์ชัน push()
และฟังก์ชัน getAllEntries() เพื่อ Return ค่าทั้งหมดใน Array
ซึ่งนำ Class Database ไปใช้ในการสร้าง Generic ของ Class Student และ Teacher เพื่อดูจำนวน Entries ทั้งหมด

# Part 5
เป็นการสร้าง createBonusAdder รูปแบบ Higher-order Function เพื่อรับค่า bonus แล้วทำการ Return ฟังก์ชันที่รับ grade เพื่อ Return grade + bonus
และสร้างฟังก์ชัน bonusAdder เพื่อกำหนด Object Student ในการให้ Bonus ตามที่ใส่ จากนั้นจะทำการคำนวณเกรดใหม่ทั้งหมดตาม Bonus ที่ใส่
โดยการใช้ฟังก์ชัน map()

# Part 6
เป็นการสร้างฟังก์ชัน fetchStudentData ในการ Async/Await เพื่อทดสอบดึงค่า API
โดยมีการใช้ ChatGPT เพื่อช่วยแก้ Syntax Error และใช้ Stackoverflow ในการค้นหาวิธีการแก้ปัญหาไฟล์ tsconfig.json

# Part 7
ใช้ Class Database ในการสร้าง Generic Array ของ Class Student เพื่อใช้ฟังก์ชันเหล่านี้
1. filter() : เพื่อกรองนักเรียนที่มี Average Grade ที่มากกว่า 75
2. map() : ใช้แปลง Object เป็น Name ของ Class Student
3. reduce() : ใช้ในการคำนวณ Total Number of Grades ของนักเรียนทั้งหมด

# Part 8
เป็นการสร้างฟังก์ชัน parseJSONData เพื่อรับค่า String เป็น JSON Data Formant เพื่อสร้าง Object ของ Class Student
โดยการใช้ฟังก์ชัน parse() ของ JSON เพื่อแปลงข้อมูล ซึ่งมีการใช้ try catch เพื่อครอบในส่วนของฟังก์ชัน parse เพื่อดักจับ Error
ถ้ารูปแบบ JSON Data ไม่ถูกต้องจะทำการแสดงจุด Error หากรูปแบบถูกต้องจะทำการสร้าง Object Student โดยใช้ข้อมูลจาก JSON Data

# Part 9
เป็นการสร้าง HTML เพื่อสร้างฟอร์มการ Add Student โดยใช้ jQuery DOM Manipulation
โค้ดในส่วน `$(document).ready(function()` เป็นการตรวจสอบว่า DOM ถูกโหลดเรียบร้อยแล้ว
และโค้ดในส่วน `$('#studentForm').submit(function(event)` เป็นการดักจับ Event การ Submit ของ ID `#studentForm`
เพื่อนำค่า ID `#studentName` แสดงค่าโดยใช้ Tag `<li>` ที่จะถูกแสดงในรายการ ID `#studentsList` โดยใช้ Tag `<ul>`