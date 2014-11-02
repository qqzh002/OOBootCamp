"use strict";

var ParkingFellowBase = require("./parkingFellowBase");

function ParkingFellow(parkingLots) {
    ParkingFellowBase.call(this, parkingLots);
}

ParkingFellow.prototype = new ParkingFellowBase();

ParkingFellow.prototype.park = function (car) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var ticket = this.parkingLots[i].park(car);
        if (ticket !== undefined) {
            return ticket;
        }
    }
};

module.exports = ParkingFellow;
