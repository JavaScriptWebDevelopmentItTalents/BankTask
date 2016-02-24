var shortDeposit = new Deposit('Short Deposit', 3, 3);
var longDeposit = new Deposit('Long Deposit', 5, 12);
var homeCredit = new Credit('Home Credit', 6);
var consumerCredit = new Credit('Consumer Credit', 10);
var pesho = new Client('Pesho', 4151, 32);
pesho.openDeposit(shortDeposit, 3500);