export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  const listOfIds = arrayObject.map((obj) => obj.id);
  return listOfIds;
}
