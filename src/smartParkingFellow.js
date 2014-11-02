"use strict";

var _ = require("underscore");
var ParkingFellowBase = require("./parkingFellowBase");

function SmartParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SmartParkingFellow.prototype = new ParkingFellowBase();

SmartParkingFellow.prototype.park = function (car) {
    var parkingLotWithMostEmptySpaces = _.chain(this.parkingLots)
        .sortBy(function (parkingLot) {
            return parkingLot.countEmptySpaces();
        })
        .last()
        .value();
    return parkingLotWithMostEmptySpaces.park(car);
};

module.exports = SmartParkingFellow;
