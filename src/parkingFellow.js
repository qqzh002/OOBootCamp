"use strict";

var ParkingFellowBase = require("./parkingFellowBase");
var utils = require("./utils");

function ParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

ParkingFellow.prototype = new ParkingFellowBase();

ParkingFellow.prototype.park = function (car) {
    return utils.iterateUntilNotUndefined(this.parkingLots, function (parkingLot) {
        return parkingLot.park(car);
    });
};

module.exports = ParkingFellow;
