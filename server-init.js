const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Express server is listening on port: ${PORT}\n`);
});

module.exports = app;
