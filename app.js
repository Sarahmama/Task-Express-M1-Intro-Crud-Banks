const express = require("express");
const app = express();

app.use(express.json());
const router = require("./apis/accounts/routes");

app.use(router);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
