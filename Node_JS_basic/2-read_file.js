const fs = require('fs');

function countStudents(path) {
  let content;
  try {
    // Read the file synchronously
    content = fs.readFileSync(path, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split the content by lines
  const lines = content.split('\n');

  // Variables to store student count and details
  let count = 0;
  const fields = {};

  // Process each line
  for (const line of lines) {
    // Ignore headers or empty lines
    if (line !== '' && !line.startsWith('firstname')) {
      count += 1;
      const studentInfo = line.split(',');
      const field = studentInfo[3]; // field information is in the fourth column
      if (!fields[field]) { // checks if this is the first time we're encountering this field
        fields[field] = [];
      }
      fields[field].push(studentInfo[0]); // first name is in the first column
    }
  }
  console.log(`Number of students: ${count}`);
  for (const [field, students] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
}
module.exports = countStudents;
