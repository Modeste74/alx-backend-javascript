export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const filterStudents = listOfStudents.filter((obj) => obj.location === city);
  const updateStudentList = filterStudents.map((obj) => {
    const studentGrade = newGrades.find((objs) => objs.studentId === obj.id);
    if (studentGrade) {
      return { ...obj, grade: studentGrade.grade };
    }
    return { ...obj, grade: 'N/A' };
  });
  return updateStudentList;
}
