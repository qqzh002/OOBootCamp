"use strict";

require("should");
var ParkingLot = require("../src/parkingLot");
var ParkingFellow = require("../src/parkingFellow");

describe("Parking Fellow", function () {

    describe("when there is only one parking lot", function () {

        it("should be able to park car", function () {
            var parkingLot = new ParkingLot();
            var parkingFellow = new ParkingFellow([parkingLot]);
            var ticket = parkingFellow.park("car");
            parkingLot.pick(ticket).should.equal("car");
        });

        it("should be able to pick car", function () {
            var parkingLot = new ParkingLot();
            var parkingFellow = new ParkingFellow([parkingLot]);
            var ticket = parkingLot.park("car");
            parkingFellow.pick(ticket).should.equal("car");
        });

    });

    describe("when there are two parking lots", function () {

        it("should be able to park car when one of the parking lot is full", function () {
            var fullParkingLot = new ParkingLot(0);
            var emptyParkingLot = new ParkingLot(1);
            var parkingFellow = new ParkingFellow([fullParkingLot, emptyParkingLot]);
            var ticket = parkingFellow.park("car");
            emptyParkingLot.pick(ticket).should.equal("car");
        });

        it("should be able to pick car", function () {
            var parkingLot1 = new ParkingLot();
            var parkingLot2 = new ParkingLot();
            var parkingFellow = new ParkingFellow([parkingLot1, parkingLot2]);
            var ticket1 = parkingLot1.park("car1");
            var ticket2 = parkingLot2.park("car2");
            parkingFellow.pick(ticket1).should.equal("car1");
            parkingFellow.pick(ticket2).should.equal("car2");
        });

    });

});
