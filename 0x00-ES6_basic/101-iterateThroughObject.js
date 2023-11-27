export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  // Using for...of loop to iterate through the iterator
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }
  // Joining employee names using '|' separator
  const result = employeeNames.join(' | ');
  return result;
}
