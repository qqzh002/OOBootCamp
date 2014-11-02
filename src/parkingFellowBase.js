"use strict";

function ParkingFellowBase(parkingLots) {
    this.parkingLots = parkingLots;
}

ParkingFellowBase.prototype.pick = function (ticket) {
    for (var i = 0; i < this.parkingLots.length; i++) {
        var car = this.parkingLots[i].pick(ticket);
        if (car !== undefined) {
            return car;
        }
    }
};

module.exports = ParkingFellowBase;
