"use strict";

var _ = require("underscore");

function ParkingLot(capacity) {
    this.capacity = capacity === undefined ? 100 : capacity;
    this.cars = {};
}

ParkingLot.prototype.park = function (car) {
    if (this.capacity <= _.size(this.cars)) {
        return;
    }
    var ticket = _.uniqueId();
    this.cars[ticket] = car;
    return ticket;
};

ParkingLot.prototype.pick = function (ticket) {
    var car = this.cars[ticket];
    delete this.cars[ticket];
    return car;
};

ParkingLot.prototype.getCapacity = function () {
    return this.capacity;
};

ParkingLot.prototype.countEmptySpaces = function () {
    return this.capacity - _.size(this.cars);
};

ParkingLot.prototype.calculateVacancyRate = function () {
    return this.countEmptySpaces() / this.capacity;
};

ParkingLot.prototype.generateReport = function (prefix) {
    return prefix + "P " + this.countEmptySpaces() + " " + this.getCapacity() + "\r\n";
};

module.exports = ParkingLot;
