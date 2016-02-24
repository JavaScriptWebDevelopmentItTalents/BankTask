/*global validator, BankProduct*/
var Credit = (function iife(parent) {
    'use strict';
    function Credit(name, YTP) {
        var _monthDue;
        parent.call(this, name, YTP);
        this.getMonthDue = function get() {
            return _monthDue;
        };
        this.setMonthDue = function set(value) {
            validator.validateIfNumber(value, 'Credit month due');
            _monthDue = value;
        };
    }

    Credit.prototype = Object.create(parent.prototype);
    Credit.constructor = Credit;
    return Credit;
}(BankProduct));