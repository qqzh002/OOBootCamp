"use strict";

require("should");
var given = require("mocha-testdata");
var ParkingLot = require("../src/parkingLot");
var ParkingFellow = require("../src/parkingFellow");
var SmartParkingFellow = require("../src/smartParkingFellow");

describe("Parking Fellow", function () {

    describe("when there is only one parking lot", function () {

        given(ParkingFellow, SmartParkingFellow)
        .it("should be able to park car", function (ParkingFellowConstructor) {
            var parkingLot = new ParkingLot();
            var parkingFellow = new ParkingFellowConstructor([parkingLot]);
            var ticket = parkingFellow.park("car");
            parkingLot.pick(ticket).should.equal("car");
        });

        given(ParkingFellow, SmartParkingFellow)
        .it("should be able to pick car", function (ParkingFellowConstructor) {
            var parkingLot = new ParkingLot();
            var parkingFellow = new ParkingFellowConstructor([parkingLot]);
            var ticket = parkingLot.park("car");
            parkingFellow.pick(ticket).should.equal("car");
        });

    });

    describe("when there are two parking lots", function () {

        given(ParkingFellow, SmartParkingFellow)
        .it("should be able to park car when one of the parking lot is full", function (ParkingFellowConstructor) {
            var fullParkingLot = new ParkingLot(0);
            var emptyParkingLot = new ParkingLot(1);
            var parkingFellow = new ParkingFellowConstructor([fullParkingLot, emptyParkingLot]);
            var ticket = parkingFellow.park("car");
            emptyParkingLot.pick(ticket).should.equal("car");
        });

        given(ParkingFellow, SmartParkingFellow)
        .it("should be able to pick car", function (ParkingFellowConstructor) {
            var parkingLot1 = new ParkingLot();
            var parkingLot2 = new ParkingLot();
            var parkingFellow = new ParkingFellowConstructor([parkingLot1, parkingLot2]);
            var ticket1 = parkingLot1.park("car1");
            var ticket2 = parkingLot2.park("car2");
            parkingFellow.pick(ticket1).should.equal("car1");
            parkingFellow.pick(ticket2).should.equal("car2");
        });

    });

});
