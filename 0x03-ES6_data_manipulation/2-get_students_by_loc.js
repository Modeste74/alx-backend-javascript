export default function getStudentsByLocation(arrayObject, location) {
  const filterByLocation = arrayObject.filter((obj) => obj.location === location);
  return filterByLocation || [];
}
