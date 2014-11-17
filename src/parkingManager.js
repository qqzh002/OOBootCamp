"use strict";

var ParkingLot = require("./parkingLot");
var utils = require("./utils");

function ParkingManager(parkingLots, parkingFellows) {
    this.parkingLots = parkingLots;
    this.parkingFellows = parkingFellows;
}

ParkingManager.prototype.park = function (car) {
    return utils.iterateUntilNotUndefined(this.getParkableList(), function (parkableList) {
        return parkableList.park(car);
    });
};

ParkingManager.prototype.pick = function (ticket) {
    return utils.iterateUntilNotUndefined(this.getParkableList(), function (parkableList) {
        return parkableList.pick(ticket);
    });
};

ParkingManager.prototype.getParkableList = function () {
    return this.parkingLots.concat(this.parkingFellows);
};

module.exports = ParkingManager;
