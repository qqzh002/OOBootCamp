"use strict";

var _ = require("underscore");
var ParkingLot = require("../../src/parkingLot");

function ParkingLotBuilder() {
    this.capacity = 100;
    this.numberOfCars = 0;
}

ParkingLotBuilder.prototype.withCapacity = function (capacity) {
    this.capacity = capacity;
    return this;
};

ParkingLotBuilder.prototype.withNumberOfCars = function (numberOfCars) {
    this.numberOfCars = numberOfCars;
    return this;
};

ParkingLotBuilder.prototype.build = function () {
    var parkingLot = new ParkingLot(this.capacity);
    _.times(this.numberOfCars, function () {
        parkingLot.park(_.uniqueId("stupidCar_"));
    });
    return parkingLot;
};

module.exports = ParkingLotBuilder;
