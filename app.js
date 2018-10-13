const express = require("express");
const app = express();
let visits = 0;

app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  visits++;
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/visits", (req, res) => {
  res.send(visits);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port 3000!");
});
