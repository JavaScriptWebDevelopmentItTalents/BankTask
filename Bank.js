/*global validator*/
var bank = (function iife() {
    'use strict';
    var bank = new Bank('BNB', 'Bulgaria, Sofia');

    function Bank(name, address) {
        var _name,
            _address,
            _money = 0,
            _reserv = 0,
            _deposits = [],
            _credits = [];
        this.getName = function get() {
            return _name;
        };
        this.setName = function set(value) {
            validator.validateIfString(value, 'Bank name');
            _name = value;
        };
        this.getAddress = function get() {
            return _address;
        };
        this.setAddress = function set(value) {
            validator.validateIfString(value, 'Bank address');
            _address = value;
        };
        this.getMoney = function get() {
            return _money;
        };
        this.setMoney = function set(value) {
            validator.validateIfNumber(value, 'Bank money');
            _money = value;
        };
        this.getReserv = function get() {
            return _reserv;
        };
        this.setReserv = function set(value) {
            validator.validateIfNumber(value, 'Bank reserv');
            _reserv = value;
        };
        this.getDeposits = function get() {
            return _deposits;
        };
        this.addDeposit = function add(deposit) {
            validator.validateIfObject(deposit, 'Bank deposits');
            _deposits.push(deposit);
        };
        this.getCredits = function get() {
            return _credits;
        };
        this.addCredits = function add(credit) {
            validator.validateIfObject(credit, 'Bank credits');
            _credits.push(credit);
        };

        this.setName(name);
        this.setAddress(address);
    }

    Bank.prototype.takeDeposit = function takeDeposit(deposit) {
        var currentMoney = this.getMoney();
        this.setMoney(currentMoney + deposit.getMoney());
        this.setReserv(currentMoney + deposit.getMoney() * 9 / 10);
        this.addDeposit(deposit);
        console.log('Deposit added!');
    };
    Bank.prototype.payTaxes = function payTaxes() {
        var currentMoney = this.getMoney();
        for (var i = 0; i < this.getDeposits().length; i++) {
            this.getDeposits()[i].setMoney(
                this.getDeposits()[i].getMoney() +
                (this.getDeposits()[i].getMoney() * this.getDeposits()[i].getYTP() / 100)
            );
            this.setMoney(currentMoney - (this.getDeposits()[i].getMoney() * this.getDeposits()[i].getYTP() / 100));
        }
    };
    Bank.prototype.giveCredit = function giveCredit(credit) {
        //TODO: make
    };

    return {
        takeDeposit: bank.takeDeposit.bind(bank),
        payTaxes: bank.payTaxes.bind(bank),
        giveCredit: bank.giveCredit.bind(bank),
        showMoney: bank.getMoney,
        showReserve: bank.getReserv
    };
}());