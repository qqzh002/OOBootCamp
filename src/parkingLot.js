"use strict";

var _ = require("underscore");

function ParkingLot(capacity) {
    this.capacity = capacity;
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

ParkingLot.prototype.countEmptySpaces = function () {
    return this.capacity - _.size(this.cars);
};

module.exports = ParkingLot;
