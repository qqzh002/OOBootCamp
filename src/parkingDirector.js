"use strict";

function ParkingDirector(parkingManagers) {
    this.parkingManagers = parkingManagers;
}

ParkingDirector.prototype.generateReport = function () {
    return this.parkingManagers[0].generateReport();
};

module.exports = ParkingDirector;
