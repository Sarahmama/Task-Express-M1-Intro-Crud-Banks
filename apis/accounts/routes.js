const express = require("express");
const router = express.Router();

const {
  getAllAccount,
  createAccount,
  updtAccount,
  deleteAccount,
} = require("./controllers");

router.get("/accounts", getAllAccount);
router.post("/accounts", createAccount);
router.put("/accounts/:accountId", updtAccount);
router.delete("/accounts/:accountId", deleteAccount);

module.exports = router;
