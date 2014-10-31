"use strict";

require("should");
var ParkingLot = require("../src/parkingLot");

describe("Parking Lot", function () {
    var parkingLot;

    beforeEach(function () {
        parkingLot = new ParkingLot();
    });

    it("should be able to park and pick car", function () {
        var ticket = parkingLot.park("car");
        parkingLot.pick(ticket).should.equal("car");
    });

    it("should be able to pick the right car when there are 2 cars", function () {
        var ticket1 = parkingLot.park("car1");
        var ticket2 = parkingLot.park("car2");
        parkingLot.pick(ticket1).should.equal("car1");
        parkingLot.pick(ticket2).should.equal("car2");
    });

    it("should be able to pick the right car when there are 3 cars", function () {
        var ticket1 = parkingLot.park("car1");
        var ticket2 = parkingLot.park("car2");
        var ticket3 = parkingLot.park("car3");
        parkingLot.pick(ticket2).should.equal("car2");
        parkingLot.pick(ticket3).should.equal("car3");
        parkingLot.pick(ticket1).should.equal("car1");
    });

    it("should not be able to pick car when the car is already picked", function () {
        var ticket = parkingLot.park("car");
        parkingLot.pick(ticket);
        (parkingLot.pick(ticket) === undefined).should.be.true;
    });

    it("should not be able to park car when parkingLot has no space", function () {
        parkingLot = new ParkingLot(0);
        var ticket = parkingLot.park("car");
        (parkingLot.pick(ticket) === undefined).should.be.true;
    });

    it("should not be able to park car when parkingLot is full", function () {
        parkingLot = new ParkingLot(1);
        parkingLot.park("car1");
        var ticket = parkingLot.park("car2");
        (parkingLot.pick(ticket) === undefined).should.be.true;
    });

});
