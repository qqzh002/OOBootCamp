"use strict";

require("should");
var given  = require("mocha-testdata");
var Length = require("../src/length.js");

describe.skip("Length", function () {

    it("should can tell two lengths are equal", function () {
        var length1 = new Length(1);
        var length2 = new Length(1);
        length1.isEqual(length2).should.be.true;
    });

    it("should can tell two lengths are not equal", function () {
        var length1 = new Length(1);
        var length2 = new Length(2);
        length1.isEqual(length2).should.be.false;
    });

    given([new Length(2, Length.UNIT.METER),        new Length(2, Length.UNIT.METER)],
          [new Length(7, Length.UNIT.CENTIMETER),   new Length(7, Length.UNIT.CENTIMETER)],
          [new Length(123, Length.UNIT.MILLIMETER), new Length(123, Length.UNIT.MILLIMETER)])
    .it("should can support meter, centimeter and millimeter as units", function (length1, length2) {
        length1.isEqual(length2).should.be.true;
    });

    it("should can tell two lengths are not equal with same value but different units", function () {
        var length1 = new Length(1, Length.UNIT.METER);
        var length2 = new Length(1, Length.UNIT.CENTIMETER);
        length1.isEqual(length2).should.be.false;
    });

    it("should give centimeter as default unit", function () {
        var length1 = new Length(1);
        var length2 = new Length(1, Length.UNIT.CENTIMETER);
        length1.isEqual(length2).should.be.true;
    });

    given([new Length(1, Length.UNIT.METER), new Length(100, Length.UNIT.CENTIMETER)],
          [new Length(3, Length.UNIT.METER), new Length(3000, Length.UNIT.MILLIMETER)])
    .it("should can transform units", function (length1, length2) {
        length1.isEqual(length2).should.be.true;
    });

});
