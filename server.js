// Import http module
const http = require('http')

// Create server
const server = http.createServer((request, response) => {
  
  // if (request.url === '/'){
  //   response.writeHead(200, { 'Content-type': 'text/html' })
  //   response.write('<h1>Home page</h1>')
  // } else if (request.url === '/about') {
  //   response.writeHead(200, { 'Content-type': 'text/html' })
  //   response.write('<h1>About page</h1>')
  // } else if (request.url === '/contact') {
  //   response.writeHead(200, { 'Content-type': 'text/html' })
  //   response.write('<h1>Contact page</h1>')
  // } else if (request.url === '/secret') {
  //   response.writeHead(403, { 'Content-type': 'text/plain'})
  //   response.write('Access denied!!!')
  // } else {
  //   response.writeHead(404, { 'Content-type': 'text/plain'})
  //   response.write('404 Not found!!!')
  // }

  let statusCode;
  let contentType;
  let responseMessage;

  switch (request.url) {
    case '/':
      statusCode = 200;
      contentType = 'text/html';
      responseMessage = '<h1>Home page</h1>';
      break;
    case '/about':
      statusCode = 200;
      contentType = 'text/html';
      responseMessage = '<h1>About page</h1>';
      break;
    case '/contact':
      statusCode = 200;
      contentType = 'text/html';
      responseMessage = '<h1>Contact page</h1>';
      break;
    case '/secret':
      statusCode = 401;
      contentType = 'text/plain';
      responseMessage = 'Access denied!';
      break;
    default:
      statusCode = 404;
      contentType = 'text/plain';
      responseMessage = '404 Not found!';
  }

  response.writeHead(statusCode, { 'Content-type': contentType })
  response.write(responseMessage)
  response.end()
})

// Set port and ip
const port = process.env.PORT_NUMBER
// const ip = 'localhost'

// Listen to port
server.listen(port, () => {
  console.log(`Server is running at port ${port}...`)
})