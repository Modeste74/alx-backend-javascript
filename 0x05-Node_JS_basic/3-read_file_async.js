const fs = require('fs').promises;
function countStudents (path) {
  return new Promise(async(resolve, reject) => {
    try {
      const data = await fs.readFile(path, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const header = lines[0].split(',');
      const numberOfStudents = lines.length - 1;
      console.log(`Number of students: ${numberOfStudents}`);
      for (let i = 1; i < header.length; i++) {
        const fieldName = header[i].trim();
	const fieldData = lines.slice(1)
	  .map(line => line.split(',')[i].trim())
	  .filter(Boolean);
	console.log(`Number of students in ${fieldName}: ${fieldData.length}. List: ${fieldData.join(', ')}`);
      }
      resolve(`Data processed successfully`);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;
