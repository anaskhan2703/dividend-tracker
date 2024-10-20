// Import the necessary modules
const express = require('express'); // Import Express
require('dotenv').config(); // Import dotenv to load environment variables

// Create an Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for CORS (Cross-Origin Resource Sharing)
app.use(require('cors')());

// Set up a simple route
app.get('/', (req, res) => {
    res.send('API Running DONNEY'); // Respond with a message
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`); // Log to console when the server is running
});
