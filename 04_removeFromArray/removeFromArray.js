const removeFromArray = function(array) {
    const args = [...arguments];
    for (let arg of args) {
        if (array.includes(arg) && args.indexOf(arg) > 0) {
            const index = array.indexOf(arg);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
