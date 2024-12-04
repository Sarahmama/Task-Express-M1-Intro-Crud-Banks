const express = require("express");
const app = express();
const router = require("./apis/accounts/routes"); //import routes

app.use(express.json());

// use routes
app.use("/apis/accounts", router);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
