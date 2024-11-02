const express = require('express');

// Create an instance of Express
const app = express();

// Define the port
const PORT = process.env.PORT || 8000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});