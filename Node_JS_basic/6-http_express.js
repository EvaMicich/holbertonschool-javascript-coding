const express = require('express');

const app = express(); // Create an instance of an Express app
const PORT = 1245;

// Define a route for the root path of the server
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app
module.exports = app;
