const express = require("express");
const app = express();
const accounts = require("./accounts");

const createNewAccount = (id, username) => {
  accounts.push({ id: id, username: username, fund: 0 });
  return accounts;
};
const deleteAccount = (accountIdToBeDeleted) => {
  const newAccounts = accounts.filter(
    (account) => account.id != accountIdToBeDeleted
  );
  console.log("my new accounts are: ", newAccounts);
  return newAccounts;
};
app.use(express.json());
// Get Method
app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

//Post Method
app.post("/accounts", (req, res) => {
  const newId = accounts.length + 1;
  const newAccount = createNewAccount(newId, req.body.username);

  res.status(201).json(accounts);
});
//Delete Method
app.delete("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.map((account) => account.id == accountId);
  if (account) {
    const deletedAccount = deleteAccount(accountId);
    res.status(204).json();
  } else {
    res.status(404).end();
  }
});

//Update Method
app.put("/accounts/:accountId", (req, res) => {
  const { accountId } = req.params;
  const account = accounts.map((account) => account.id == accountId);
  if (account) {
    res.status(200).json();
  } else {
    res.status(404).end();
  }
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});