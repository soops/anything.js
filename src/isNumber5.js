//Just in case you need to check if something equals 5...
var isNumber5 = function (num) {
    return num == 5;
};

var isStrictlyNumber5 = function (num) {
    return num === 5;
};

anything.prototype.isNumber5 = isNumber5;
anything.prototype.isStrictlyNumber5 = isStrictlyNumber5;
