"use strict";

var _ = require("underscore");
var ParkingFellowBase = require("./parkingFellowBase");

function SuperParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SuperParkingFellow.prototype = new ParkingFellowBase();

SuperParkingFellow.prototype.park = function (car) {
    return _.max(this.parkingLots, function (parkingLot) {
        return parkingLot.calculateVacancyRate();
    }).park(car);
};

module.exports = SuperParkingFellow;
