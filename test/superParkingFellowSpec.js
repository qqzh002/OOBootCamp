"use strict";

require("should");
var ParkingLot = require("../src/parkingLot");
var SuperParkingFellow = require("../src/SuperParkingFellow");

describe("Super Parking Fellow", function () {

    describe("when there is only one parking lot", function () {

        it("should be able to park car", function () {
            var parkingLot = new ParkingLot();
            var parkingFellow = new SuperParkingFellow([parkingLot]);
            var ticket = parkingFellow.park("car");
            parkingLot.pick(ticket).should.equal("car");
        });

        it("should be able to pick car", function () {
            var parkingLot = new ParkingLot();
            var parkingFellow = new SuperParkingFellow([parkingLot]);
            var ticket = parkingLot.park("car");
            parkingFellow.pick(ticket).should.equal("car");
        });

    });

    describe("when there are two parking lots", function () {

        it("should be able to park car when one of the parking lot is full", function () {
            var fullParkingLot = new ParkingLot(0);
            var emptyParkingLot = new ParkingLot(1);
            var parkingFellow = new SuperParkingFellow([fullParkingLot, emptyParkingLot]);
            var ticket = parkingFellow.park("car");
            emptyParkingLot.pick(ticket).should.equal("car");
        });

        it("should be able to pick car", function () {
            var parkingLot1 = new ParkingLot();
            var parkingLot2 = new ParkingLot();
            var parkingFellow = new SuperParkingFellow([parkingLot1, parkingLot2]);
            var ticket1 = parkingLot1.park("car1");
            var ticket2 = parkingLot2.park("car2");
            parkingFellow.pick(ticket1).should.equal("car1");
            parkingFellow.pick(ticket2).should.equal("car2");
        });

        it("should park car to the parking lot with higher vacancy rate", function () {
            var parkingLotWithLowerVacancyRate = new ParkingLot(100);
            parkingLotWithLowerVacancyRate.park("car1");
            var parkingLotWithHigherVacancyRate = new ParkingLot(100);
            var parkingFellow = new SuperParkingFellow([parkingLotWithLowerVacancyRate, parkingLotWithHigherVacancyRate]);

            var ticket = parkingFellow.park("car2");

            parkingLotWithHigherVacancyRate.pick(ticket).should.equal("car2");
        });

        it("should park car to the parking lot with higher vacancy rate even if it has less empty spaces", function () {
            var parkingLotWithLowerVacancyRate = new ParkingLot(100);
            parkingLotWithLowerVacancyRate.park("car1");
            var parkingLotWithHigherVacancyRate = new ParkingLot(10);
            var parkingFellow = new SuperParkingFellow([parkingLotWithLowerVacancyRate, parkingLotWithHigherVacancyRate]);

            var ticket = parkingFellow.park("car2");

            parkingLotWithHigherVacancyRate.pick(ticket).should.equal("car2");
        });

    });

});
