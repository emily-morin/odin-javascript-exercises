const reverseString = function(string) {
    const stringArray = string.split('');
    const reversedString = stringArray.reverse().join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
