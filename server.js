const express = require('express');
const app = express();

const page = require("./public/index.html");

app.get('/', (req, res) => {
  res.render(page);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});