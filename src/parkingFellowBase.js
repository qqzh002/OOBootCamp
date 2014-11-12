"use strict";

var _ = require("underscore");

function ParkingFellowBase(parkingLots) {
    this.parkingLots = parkingLots;
}

ParkingFellowBase.prototype.pick = function (ticket) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var car = this.parkingLots[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

ParkingFellowBase.prototype.chooseParkingLotBy = function (iteratee) {
    return _.chain(this.parkingLots)
        .sortBy(iteratee)
        .last()
        .value();
};

module.exports = ParkingFellowBase;
