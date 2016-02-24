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
        var currentMoney = bank.getMoney();
        bank.setMoney(currentMoney + deposit.getMoney());
        bank.setReserv(currentMoney + deposit.getMoney() * 9 / 10);
        bank.addDeposit(deposit);
        console.log('Deposit added!');
    };
    Bank.prototype.payTaxes = function payTaxes() {
        var currentMoney = bank.getMoney();
        for (var i = 0; i < bank.getDeposits().length; i++) {
            bank.getDeposits()[i].setMoney(
                bank.getDeposits()[i].getMoney() +
                (bank.getDeposits()[i].getMoney() * bank.getDeposits()[i].getYTP() / 100)
            );
            bank.setMoney(currentMoney - (bank.getDeposits()[i].getMoney() * bank.getDeposits()[i].getYTP() / 100));
        }
    };
    Bank.prototype.giveCredit = function giveCredit(credit) {
        //TODO: make
    };

    return {
        takeDeposit: bank.takeDeposit,
        payTaxes: bank.payTaxes,
        giveCredit: bank.giveCredit,
        money: bank.getMoney
    };
}());