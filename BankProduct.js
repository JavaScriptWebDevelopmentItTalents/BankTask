/*global validator*/
var BankProduct = (function iife() {
    'use strict';
    function BankProduct(name, YTP, period) {
        var _name,
            _YTP,
            _period,
            _money;
        this.getName = function get() {
            return _name;
        };
        this.setName = function set(value) {
            validator.validateIfString(value, 'BankProduct name');
            _name = value;
        };
        this.getYTP = function get() {
            return _YTP;
        };
        this.setYTP = function set(value) {
            validator.validateIfNumber(value, 'BankProduct ytp');
            _YTP = value;
        };
        this.getPeriod = function get() {
            return _period;
        };
        this.setPeriod = function set(value) {
            validator.validateIfNumber(value, 'BankProduct period');
            _period = value;
        };
        this.getMoney = function get() {
            return _money;
        };
        this.setMoney = function set(value) {
            validator.validateIfNumber(value, 'BankProduct money');
            _money = value;
        };

        this.setName(name);
        this.setYTP(YTP);
        if(period){
            this.setPeriod(period);
        }
    }

    return BankProduct;
}());