"use strict";

var _ = require("underscore");
var ParkingLot = require("./parkingLot");
var utils = require("./utils");

function ParkingManager(parkingLots, parkingFellows) {
    this.parkingLots = parkingLots;
    this.parkingFellows = parkingFellows;
}

ParkingManager.prototype.park = function (car) {
    return utils.iterateUntilNotUndefined(this.getParkableList(), function (parkable) {
        return parkable.park(car);
    });
};

ParkingManager.prototype.pick = function (ticket) {
    return utils.iterateUntilNotUndefined(this.getParkableList(), function (parkable) {
        return parkable.pick(ticket);
    });
};

ParkingManager.prototype.getCapacity = function () {
    return _.reduce(this.getParkableList(), function (sum, parkable) {
        return sum + parkable.getCapacity();
    }, 0);
};

ParkingManager.prototype.countEmptySpaces = function () {
    return _.reduce(this.getParkableList(), function (sum, parkable) {
        return sum + parkable.countEmptySpaces();
    }, 0);
};

ParkingManager.prototype.generateReport = function () {
    var report = "M " + this.countEmptySpaces() + " " + this.getCapacity() + "\r\n";
    _.each(this.getParkableList(), function (parkable) {
        report += parkable.generateReport("  ");
    });
    return report;
};

ParkingManager.prototype.getParkableList = function () {
    return this.parkingLots.concat(this.parkingFellows);
};

module.exports = ParkingManager;
