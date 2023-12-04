export default function getListStudents() {
  const studentList = [];
  const studentOne = { id: 1, firstName: 'Guillaume', location: 'San Fransisco' };
  const studentTwo = { id: 2, firstName: 'James', location: 'Columbia' };
  const studentThree = { id: 5, firstName: 'Serena', location: 'San Fransisco' };
  studentList.push(studentOne);
  studentList.push(studentTwo);
  studentList.push(studentThree);
  return studentList;
}
