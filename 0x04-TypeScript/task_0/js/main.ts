interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;  
}

const student1: Student = {
  firstName: "Modeste",
  lastName: "Ciira",
  age: 24,
  location: "Nairobi-Kenya",
};

const student2: Student = {
  firstName: "Brianna",
  lastName: "Smith",
  age: 23,
  location: "NewYork-USA"
};
const studentsList = [];
studentsList.push(student1);
studentsList.push(student2);

function renderTable() {
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const cell1 =row.insertCell();
    const cell2 =row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  document.body.appendChild(table);
}
renderTable();
