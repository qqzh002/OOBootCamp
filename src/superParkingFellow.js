"use strict";

var ParkingFellowBase = require("./parkingFellowBase");

function SuperParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SuperParkingFellow.prototype = new ParkingFellowBase();

SuperParkingFellow.prototype.park = function (car) {
    return this.chooseParkingLotBy(function (parkingLot) {
        return parkingLot.calculateVacancyRate();
    }).park(car);
};

module.exports = SuperParkingFellow;
