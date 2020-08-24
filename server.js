const express = require("express");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Start the API server
app.listen(PORT, () =>
  console.log(':earth_americas:  ==> API Server now listening on PORT ${PORT}!')
);
