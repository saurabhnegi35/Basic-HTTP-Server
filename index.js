const http = require("http");
const port = 8000;
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });

    // Above code Functionality can also be performed as
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify({
        id: 1,
        name: "Sir Isaac Newton",
      })
    );
  } else if (req.url === "/messages") {
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
