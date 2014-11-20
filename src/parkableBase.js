"use strict";

var _ = require("underscore");
var utils = require("./utils");

function ParkableBase(parkableList) {
    this.parkableList = parkableList;
}

ParkableBase.prototype.pick = function (ticket) {
    return utils.iterateUntilNotUndefined(this.parkableList, function (parkable) {
        return parkable.pick(ticket);
    });
};

module.exports = ParkableBase;
