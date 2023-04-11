const http = require("http");
const port = 8000;
const fs = require("fs");

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Nikola Tesla",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
  {
    id: 2,
    name: "Thomas Edison",
  },
];

server.on("request", (req, res) => {
  // res.writeHead(200, {
  //   "Content-Type": "application/json",
  // });

  // Above code Functionality can also be performed as
  const items = req.url.split("/");

  if (items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Messages </h1>");
    res.write("<ul>");
    res.write("<li>Hello Isaac!</li>");
    res.write("<li>What are your thoughts on astronomy?</li>");
    res.write("<ul>");
    res.write("<body>");
    res.write("<html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Server is running on port: ", port);
});
