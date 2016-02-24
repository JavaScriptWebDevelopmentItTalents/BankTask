/*global validator, bank*/
var Client = (function iife() {
    'use strict';
    function Client(name, cash, monthSalary) {
        var _name,
            _address,
            _cash,
            _monthSalary,
            _deposits = [],
            _credits = [];
        this.getName = function get() {
            return _name;
        };
        this.setName = function set(value) {
            validator.validateIfString(value, 'Client name');
            _name = value;
        };
        this.getAddress = function get() {
            return _address;
        };
        this.setAddress = function set(value) {
            validator.validateIfString(value, 'Client address');
            _address = value;
        };
        this.getCash = function get() {
            return _cash;
        };
        this.setCash = function set(value) {
            validator.validateIfNumber(value, 'Client cash');
            _cash = value;
        };
        this.getMonthSalary = function get() {
            return _monthSalary;
        };
        this.setMonthSalary = function set(value) {
            validator.validateIfNumber(value, 'Client month salary');
            _monthSalary = value;
        };
        this.getDeposits = function get(){
            return _deposits;
        };
        this.addDeposit = function add(deposit) {
            validator.validateIfObject(deposit, 'Client deposits');
            _deposits.push(deposit);
        };
        this.getCredits = function get(){
            return _credits;
        };
        this.addCredits = function add(credit) {
            validator.validateIfObject(credit, 'Client credits');
            _credits.push(credit);
        };

        this.setName(name);
        this.setCash(cash);
        this.setMonthSalary(monthSalary);
    }

    Client.prototype.openDeposit = function openDeposit(deposit, money) {
        if(this.getCash() >= money) {
            this.setCash(this.getCash() - money);
            deposit.setMoney(money);
            this.addDeposit(deposit);
            bank.takeDeposit(deposit);
        } else {
            console.log('Not enought funds to make the deposit!');
        }
    };
    Client.prototype.requestCredit = function requestCredit(credit) {
        var monthDue = 0;
        for (var i = 0; i < this.getCredits().length; i++) {
            monthDue += this.getCredits()[i].getMonthDue();
        }
        if(monthDue < this.getMonthSalary() / 2) {
            //TODO:
            bank.giveCredit()
        } else {
            console.log('Too much you owe, take credit you can not!');
        }

    };
    Client.prototype.payCredit = function payCredit(credit, money) {

    };

    return Client;
}());