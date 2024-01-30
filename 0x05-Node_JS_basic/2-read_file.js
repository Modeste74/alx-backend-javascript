const fs = require('fs');
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n')
      .filter(line => line.trim() !== '');
    const header = lines[0].split(',');
    // if (header.length < 2) {
    // }
    const numberOfStudents = lines.length - 1
    console.log(`Number of students: ${numberOfStudents}`);
    for (let i = 1; i < header.length; i++) {
      const fieldName = header[i].trim();
      const fieldData = lines.slice(1)
        .map(line => line.split(',')[i].trim())
        .filter(Boolean);
	console.log(`Number of students in ${fieldName}: ${fieldData.length}. List: ${fieldData.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
