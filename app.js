// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Node App on port 3200!");
});

const port = 3200;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

