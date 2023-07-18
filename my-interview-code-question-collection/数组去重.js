function removeDuplicates(array) {
    array = JSON.parse(array);
    if (typeof (array) == 'number') { return array; }
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin });
rl.on('line', (input) => {
    if (input === '') {
        return rl.close();
    }
    console.log(removeDuplicates(input));
});