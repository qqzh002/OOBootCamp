"use strict";

var _ = require("underscore");
var ParkingFellowBase = require("./parkingFellowBase");

function SmartParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SmartParkingFellow.prototype = new ParkingFellowBase();

SmartParkingFellow.prototype.park = function (car) {
    var parkingLotWithHighestVacancyRate = _.chain(this.parkingLots)
        .sortBy(function (parkingLot) {
            return parkingLot.calculateVacancyRate();
        })
        .last()
        .value();
    return parkingLotWithHighestVacancyRate.park(car);
};

module.exports = SmartParkingFellow;
