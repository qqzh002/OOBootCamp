"use strict";

var _ = require("underscore");
var ParkableBase = require("./parkableBase");
var ParkingLot = require("./parkingLot");
var utils = require("./utils");

function ParkingManager(parkingLots, parkingFellows) {
    this.parkableList = parkingLots.concat(parkingFellows);
}

ParkingManager.prototype = new ParkableBase();

ParkingManager.prototype.park = function (car) {
    return utils.iterateUntilNotUndefined(this.parkableList, function (parkable) {
        return parkable.park(car);
    });
};

ParkingManager.prototype.getCapacity = function () {
    return _.reduce(this.parkableList, function (sum, parkable) {
        return sum + parkable.getCapacity();
    }, 0);
};

ParkingManager.prototype.countEmptySpaces = function () {
    return _.reduce(this.parkableList, function (sum, parkable) {
        return sum + parkable.countEmptySpaces();
    }, 0);
};

ParkingManager.prototype.generateReport = function () {
    var report = "M " + this.countEmptySpaces() + " " + this.getCapacity() + "\r\n";
    _.each(this.parkableList, function (parkable) {
        report += parkable.generateReport("  ");
    });
    return report;
};

module.exports = ParkingManager;
