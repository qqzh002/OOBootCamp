"use strict";

require("should");
var ParkingLot = require("../../src/parkingLot");
var ParkingFellow = require("../../src/parkingFellow");
var ParkingManager = require("../../src/parkingManager");

describe("Parking Manager", function () {

    it("should be able to park car by itself", function () {
        var parkingLot = new ParkingLot(100);
        var parkingManager = new ParkingManager([], [parkingLot]);

        var ticket = parkingManager.park("car");

        parkingLot.pick(ticket).should.equal("car");
    });

    it("should be able to park car through parking fellow", function () {
        var parkingLot = new ParkingLot(100);
        var parkingFellow = new ParkingFellow([parkingLot]);
        var parkingManager = new ParkingManager([parkingFellow], []);

        var ticket = parkingManager.park("car");

        parkingLot.pick(ticket).should.equal("car");
    });

    it("should be able to pick car by itself", function () {
        var parkingLot = new ParkingLot(100);
        var parkingManager = new ParkingManager([], [parkingLot]);

        var ticket = parkingLot.park("car");

        parkingManager.pick(ticket).should.equal("car");
    });

    it("should be able to pick car through parking fellow", function () {
        var parkingLot = new ParkingLot(100);
        var parkingFellow = new ParkingFellow([parkingLot]);
        var parkingManager = new ParkingManager([parkingFellow], []);

        var ticket = parkingLot.park("car");

        parkingManager.pick(ticket).should.equal("car");
    });

});
