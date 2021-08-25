"use strict";
module.exports = function (start, end) {
    var combine = "";
    for (var i = start; i <= end; i++) {
        combine +=
            i % 15 === 0
                ? "FizzBuzz"
                : i % 3 === 0
                    ? "Fizz"
                    : i % 5 === 0
                        ? "Buzz"
                        : i;
        combine += i !== end && i !== start ? "," : "";
    }
    return combine;
};
