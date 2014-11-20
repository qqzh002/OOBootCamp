"use strict";

var _ = require("underscore");
var ParkableBase = require("./parkableBase");

function SuperParkingFellow(parkingLots) {
    ParkableBase.call(this, parkingLots);
}

SuperParkingFellow.prototype = new ParkableBase();

SuperParkingFellow.prototype.park = function (car) {
    return _.max(this.parkableList, function (parkingLot) {
        return parkingLot.calculateVacancyRate();
    }).park(car);
};

module.exports = SuperParkingFellow;
