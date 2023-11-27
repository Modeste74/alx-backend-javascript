export default function createIteratorObject(report) {
  const itemsData = Object.values(report.allEmployees).flatMap((iterable) => iterable);
  return itemsData;
}
