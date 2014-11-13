"use strict";

var ParkingLot = require("./parkingLot");

function ParkingManager(parkingLots, parkingFellows) {
    this.parkingLots = parkingLots;
    this.parkingFellows = parkingFellows;
}

ParkingManager.prototype.park = function (car) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var ticket = this.parkingLots[i].park(car);
        if (ticket !== undefined) {
            return ticket;
        }
    }
    for (var i = 0; i < this.parkingFellows.length; i++) {
        var ticket = this.parkingFellows[i].park(car);
        if (ticket !== undefined) {
            return ticket;
        }
    }
};

ParkingManager.prototype.pick = function (ticket) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var car = this.parkingLots[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
    for (var i = 0; i < this.parkingFellows.length; i++) {
        var car = this.parkingFellows[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

module.exports = ParkingManager;
