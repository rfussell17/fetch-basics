

async function getStudents(){
  const res = await fetch('students.json');
  const students = await res.json();

  students.forEach( student => {
    const studentBio = document.createElement('div')
    const textnode = document.createTextNode(`${student.name} is ${student.age}`)
    studentBio.appendChild(textnode);
    document.getElementById('studentDiv').appendChild(studentBio)
})
}

 async function getTeachers(){
  const res = await fetch('teachers.json');
  const teachers = await res.json();

  teachers.forEach( teacher => {
    const teacherBio = document.createElement('div')
    const textnode = document.createTextNode(`${teacher.name} is ${teacher.age}`)
    teacherBio.appendChild(textnode);
    document.getElementById('teacherDiv').appendChild(teacherBio)
})
}



getStudents();
getTeachers();