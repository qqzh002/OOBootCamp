"use strict";

var iterateUntilNotUndefined = function (list, iteratee) {
    for (var i = 0; i < list.length; i++) {
        var result = iteratee(list[i]);
        if (result !== undefined) {
            return result;
        }
    }
};

module.exports = {
    iterateUntilNotUndefined: iterateUntilNotUndefined
};
