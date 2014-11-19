"use strict";

require("should");
var ParkingLot = require("../../src/parkingLot");
var ParkingManager = require("../../src/parkingManager");
var ParkingDirector = require("../../src/parkingDirector");

describe("Parking Director", function () {

    it("should be able to see the report", function () {
        var parkingLot = new ParkingLot(100);
        var parkingManager = new ParkingManager([parkingLot], []);
        var parkingDirector = new ParkingDirector([parkingManager]);

        var report = parkingDirector.generateReport();

        report.should.equal("M 100 100\r\n  P 100 100\r\n");
    });

});
