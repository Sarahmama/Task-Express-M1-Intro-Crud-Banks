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
const updateAccount = (currentAccount, newData) => {
  const myUpdatedAccount = Object.assign(currentAccount, newData);
  return myUpdatedAccount;
};
// Get Method
exports.getAllAccount = (req, res) => {
  res.status(200).json(accounts);
};

//Post Method
exports.createAccount = (req, res) => {
  const newId = accounts.length + 1;
  const newAccount = createNewAccount(newId, req.body.username);

  res.status(201).json(newAccount);
};
//Delete Method
exports.deleteAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const deletedAccount = deleteAccount(accountId);
    res.status(204).json();
  } else {
    res.status(404).end();
  }
};

//Update Method
exports.updtAccount = (req, res) => {
  const { accountId } = req.params;
  const account = accounts.find((account) => account.id == accountId);
  if (account) {
    const updatedAccount = updateAccount(account, req.body);
    res.status(200).json(updatedAccount);
  } else {
    res.status(404).end();
  }
};
