"use strict";

var ParkingFellowBase = require("./parkingFellowBase");

function SmartParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

SmartParkingFellow.prototype = new ParkingFellowBase();

SmartParkingFellow.prototype.park = function (car) {
    return this.chooseParkingLotBy(function (parkingLot) {
        return parkingLot.calculateVacancyRate();
    }).park(car);
};

module.exports = SmartParkingFellow;
