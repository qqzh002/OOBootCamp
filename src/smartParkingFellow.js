"use strict";

var _ = require("underscore");

function SmartParkingFellow(parkingLots) {
    this.parkingLots = parkingLots;
}

SmartParkingFellow.prototype.park = function (car) {
    var parkingLotWithMostEmptySpaces = _.chain(this.parkingLots)
        .sortBy(function (parkingLot) {
            return parkingLot.countEmptySpaces();
        })
        .last()
        .value();
    return parkingLotWithMostEmptySpaces.park(car);
};

SmartParkingFellow.prototype.pick = function (ticket) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var car = this.parkingLots[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

module.exports = SmartParkingFellow;
