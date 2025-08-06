// import the express framework
const express = require("express");

// create an express app
const app = express();

// define the routes for the app
app.get("/", (request, response) => {
  // req -> request, res -> response
  // response.send("<h1>Hello, how are you????</h1><button>click here</button>");
  // send array
  // response.send(["apple", "banana", "orange"]);
  // send object
  // response.send({
  //   name: "John",
  //   age: 20,
  // });
  // send out combination of data
  response.send({
    html: "<h1>Hello, how are you????</h1>",
    list: ["apple", "banana", "orange"],
    user: {
      name: "John",
      age: 20,
    },
    count: 100,
    isTrueOrNot: true,
  });
});

// about page
app.get("/about", (request, response) => {
  response.send("<h1>This is about me</h1>");
});

// contact page
app.get("/contact", (request, response) => {
  response.send("<h1>This is a contact page</h1>");
});

// start the express app
app.listen(5123, () => {
  console.log("The server has started at http://localhost:5123");
});
