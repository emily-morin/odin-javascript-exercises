const repeatString = function(string, num) {
    let result = string;
    if (num > 0) {
        for (let i = 1; i < num; i++) {
            result += string;
        }
        return result;
    } else if (num < 0) {
        return 'ERROR';
    } else {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
