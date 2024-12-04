const express = require("express");
const router = express.Router();

//Imported function from controlles file
const {
  getAllAccount,
  createAccount,
  updtAccount,
  deleteAccount,
} = require("./controllers");

//get method
router.get("/", getAllAccount);

//post method
router.post("/", createAccount);

//put method
router.put("/:accountId", updtAccount);

//delete method
router.delete("/:accountId", deleteAccount);

module.exports = router;
