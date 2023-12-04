export default function getStudentIdsSum(listOfStudents) {
  const sum = listOfStudents.reduce((acc, obj) => acc + obj.id, 0);
  return sum;
}
