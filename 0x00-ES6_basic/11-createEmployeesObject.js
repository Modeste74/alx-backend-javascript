export default function createEmployeesObject(departmentName, employees) {
  const employeeDetails = {
    [departmentName]: [...employees],
  };
  return employeeDetails;
}
