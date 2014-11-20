"use strict";

var _ = require("underscore");
var ParkableBase = require("./parkableBase");

function SmartParkingFellow(parkingLots) {
    ParkableBase.call(this, parkingLots);
}

SmartParkingFellow.prototype = new ParkableBase();

SmartParkingFellow.prototype.park = function (car) {
    return _.max(this.parkableList, function (parkingLot) {
        return parkingLot.countEmptySpaces();
    }).park(car);
};

module.exports = SmartParkingFellow;
