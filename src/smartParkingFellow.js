"use strict";

var _ = require("underscore");
var ParkingFellowBase = require("./parkingFellowBase");

function SmartParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SmartParkingFellow.prototype = new ParkingFellowBase();

SmartParkingFellow.prototype.park = function (car) {
    return _.max(this.parkingLots, function (parkingLot) {
        return parkingLot.countEmptySpaces();
    }).park(car);
};

module.exports = SmartParkingFellow;
