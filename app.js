// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Set the port the application will listen on, defaulting to 3000 if the PORT environment variable is not set
const port = process.env.PORT || 3000;

// Define a route for the root URL ('/'). When a GET request is made to the root URL, send 'Hello World!' as the response
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server and have it listen on the specified port. Once the server is running, log a message to the console
app.listen(port, () => console.log(`App listening on port ${port}`));