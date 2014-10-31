"use strict";

var _ = require("underscore");

function ParkingFellow(parkingLots) {
    this.parkingLots = parkingLots;
}

ParkingFellow.prototype.park = function (car) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var ticket = this.parkingLots[i].park(car);
        if (ticket !== undefined) {
            return ticket;
        }
    }
};

ParkingFellow.prototype.pick = function (ticket) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var car = this.parkingLots[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

module.exports = ParkingFellow;
