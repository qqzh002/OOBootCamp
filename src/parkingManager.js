"use strict";

var ParkingLot = require("./parkingLot");

function ParkingManager(parkingLots, parkingFellows) {
    this.parkingLots = parkingLots;
    this.parkingFellows = parkingFellows;
}

ParkingManager.prototype.park = function (car) {
    for (var i = 0; i < this.getParkableList().length; i++) {
        var ticket = this.getParkableList()[i].park(car);
        if (ticket !== undefined) {
            return ticket;
        }
    }
};

ParkingManager.prototype.pick = function (ticket) {
    for (var i = 0; i < this.getParkableList().length; i++) {
        var car = this.getParkableList()[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

ParkingManager.prototype.getParkableList = function () {
    return this.parkingLots.concat(this.parkingFellows);
};

module.exports = ParkingManager;
