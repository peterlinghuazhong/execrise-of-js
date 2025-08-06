// create a server
const http = require("http");

// setup a server
const server = http.createServer((request, response) => {
  // response code is for the machine
  response.writeHead(200);
  // response message for human
  response.end("Hello");
  //   response.end(
  //     "<html><head><title>Hello</title></head><body><h1>Hello</h1></body></html>"
  //   );
});

// start a server
server.listen(5123, () => {
  // confirmation of the server has started
  console.log("The server is running at http://localhost:5123");
});
