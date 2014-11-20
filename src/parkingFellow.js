"use strict";

var ParkableBase = require("./parkableBase");
var utils = require("./utils");

function ParkingFellow(parkingLots) {
    ParkableBase.call(this, parkingLots);
}

ParkingFellow.prototype = new ParkableBase();

ParkingFellow.prototype.park = function (car) {
    return utils.iterateUntilNotUndefined(this.parkableList, function (parkingLot) {
        return parkingLot.park(car);
    });
};

module.exports = ParkingFellow;
