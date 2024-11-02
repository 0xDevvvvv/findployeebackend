const express = require('express');
const {getPrompt} = require('./prompt')
const cors = require('cors');
// Create an instance of Express
const app = express();

// Define the port
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// Create a basic route
app.post('/', (req, res) => {
  try {
    // Convert JSON body to a string
    const values = Object.values(req.body);
    const result = getPrompt(values).then((response) => res.send(`${response}`));

    // Send the values array as a response
  } catch (error) {
    // Handle any potential errors
    res.status(400).send('Invalid JSON');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 