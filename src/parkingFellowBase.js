"use strict";

var _ = require("underscore");
var utils = require("./utils");

function ParkingFellowBase(parkingLots) {
    this.parkingLots = parkingLots;
}

ParkingFellowBase.prototype.pick = function (ticket) {
    return utils.iterateUntilNotUndefined(this.parkingLots, function (parkingLot) {
        return parkingLot.pick(ticket);
    });
};

module.exports = ParkingFellowBase;
