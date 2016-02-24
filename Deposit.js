/*global BankProduct, validator*/
var Deposit = (function iife(parent) {
    'use strict';
    function Deposit(name, YTP, period) {
        var _monthPayment;
        parent.call(this, name, YTP, period);
        this._monthPayment = function get() {
            return _monthPayment;
        };
        this.setMonthPayment = function set(value) {
            validator.validateIfNumber(value, 'Credit month due');
            _monthPayment = value;
        };
    }
    Deposit.prototype = Object.create(parent.prototype);
    Deposit.constructor = Deposit;

    return Deposit;
}(BankProduct));