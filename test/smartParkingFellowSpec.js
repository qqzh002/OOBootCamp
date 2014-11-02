"use strict";

require("should");
var ParkingLot = require("../src/parkingLot");
var SmartParkingFellow = require("../src/smartParkingFellow");

describe("Smart Parking Fellow", function () {

    describe("when there are two parking lots", function () {

        it("should be able to park car to the larger one when both are empty", function () {
            var smallerParkingLot = new ParkingLot(1);
            var largerParkingLot = new ParkingLot(2);
            var parkingFellow = new SmartParkingFellow([smallerParkingLot, largerParkingLot]);
            var ticket = parkingFellow.park("car");
            largerParkingLot.pick(ticket).should.equal("car");
        });

        it("should be able to park car to the one with most empty spaces", function () {
            var smallerParkingLot = new ParkingLot(2);
            var largerParkingLot = new ParkingLot(3);
            var parkingFellow = new SmartParkingFellow([smallerParkingLot, largerParkingLot]);
            largerParkingLot.park("car1");
            largerParkingLot.park("car2");
            var ticket = parkingFellow.park("car3");
            smallerParkingLot.pick(ticket).should.equal("car3");
        });

    });

});
