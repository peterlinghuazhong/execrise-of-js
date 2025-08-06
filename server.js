const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// define the routes for the app
app.get("/books", (request, response) => {
  // get all the posts
  response.send(books);
});
// define the routes for the app
app.get("/reviews", (request, response) => {
  // get all the posts
  response.send(reviews);
});
// define the routes for the app
app.get("/authors", (request, response) => {
  // get all the posts
  response.send(authors);
});
// Your routing and controller code goes here
app.get("/books/:id", (req, res) => {
  // retrieve the post id from the url params
  const book_id = req.params.id;
  // find the post based on the id
  const selected = books.find((p) => p.id === book_id);
  res.send(selected);
});

// Your routing and controller code goes here
app.get("/reviews/:id", (req, res) => {
  // retrieve the post id from the url params
  const reviews_id = req.params.id;
  // find the post based on the id
  const selected = reviews.find((p) => p.id === reviews_id);
  res.send(selected);
});
app.get("/authors/:id", (req, res) => {
  // retrieve the post id from the url params
  const authors_id = req.params.id;
  // find the post based on the id
  const selected = authors.find((p) => p.id === authors_id);
  res.send(selected);
});

app.listen(5123, () => {
  console.log("The server is running at http://localhost:5123");
});
