const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (typeof(a) !== "number" || typeof(b) !== "number") {
        return 'ERROR';
    } else if (b < a) {
        let total = 0;
        for (let i = b; i <= a; i++) {
            total += i;
        }
        return total;
    } else {
        let total = 0;
        for (let i = a; i <= b; i++) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
