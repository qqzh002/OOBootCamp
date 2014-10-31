"use strict";

function Length(value, unit) {
    this.value = value;
    this.unit = unit || Length.UNIT.CENTIMETER;
}

Length.prototype.isEqual = function (length) {
    return getMillimeter(this) === getMillimeter(length);
};

Length.UNIT = {
    METER: "meter",
    CENTIMETER: "centimeter",
    MILLIMETER: "millimeter"
};

function getMillimeter(length) {
    switch (length.unit) {
        case Length.UNIT.METER:
            return length.value * 1000;
        case Length.UNIT.CENTIMETER:
            return length.value * 10;
        case Length.UNIT.MILLIMETER:
            return length.value;
    }
}

module.exports = Length;
