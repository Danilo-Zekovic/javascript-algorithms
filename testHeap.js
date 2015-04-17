var sort = require('./src' +
		'/sorting/heapsort.js').heapSort;
require('./cArray.js');
require('./displayArr.js');

var nums = new CArray(100);
nums.setData();
console.log("Before sorting: \n");
print(nums.toString());

console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]
