// Import the 'http' module which provides utilities for creating an HTTP server
const http = require('http');

// Create an HTTP server using the 'createServer' method
// The callback function has two parameters: 'req' (request) and 'res' (response)
const server = http.createServer((req, res) => {
    
    // Set the HTTP status code of the response to 200 (OK)
    res.statusCode = 200;
    
    // Set the content type of the response header to 'text/plain'
    // This tells the browser that the response body will be plain text
    res.setHeader('Content-Type', 'text/plain');
    
    // Send the response body, which is a simple text message: 'Hello, Node.js!'
    res.end('Hello, Node.js!');
});

// Make the server listen on port 3000
// The callback function is executed when the server starts successfully
server.listen(3000, () => {
    // Log a message to the console indicating that the server is running
    console.log('Server running at http://localhost:3000/');
});
