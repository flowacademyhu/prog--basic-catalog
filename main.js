const part1Functions = require('./part1/index');
// const part2Functions = require('./part2/index'); // Importing is disabled because of typos
const sorting = require('./sorting/index');

// Make the functions easier to use and find
const copy = part1Functions.copy.copy;
const selection = part1Functions.selectEvens.selectEvens;
const separate = part1Functions.sep.sep;
const summary = part1Functions.sumArrayFor.sumArrayFor;
const union = part1Functions.unio.union;

// const counting = part2Functions.count.countElement;
// const intersection = part2Functions.interse.intersection;  // Commented out as these will not work until typos and unreachable code has been fixed.
// const max = part2Functions.max.max;
// const min = part2Functions.min.min;

// I love the way these exports have been solved
const bubbleSort = sorting.bubble.sort;
const insertionSort = sorting.insertion.sort;
const minimumSelectionSort = sorting.minimumSelection.sort;
// Tests
console.log('Copy', copy([1, 2, 3, 4], []));
console.log('Max', minimumSelectionSort([300, -5, 2, 10, 20, -2]));
console.log('Selection', selection([1, 2, 4, 5, 6]));
console.log('Bubble sort', bubbleSort([300, -5, 2, 10, 20, -2]));
console.log('Insertion sort', insertionSort([300, -5, 2, 10, 20, -2]));
console.log('Separate', separate([1, 2, 3, 4, 5]));
console.log('Summary', summary([1, 2, 4, 5, 6]));
console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
