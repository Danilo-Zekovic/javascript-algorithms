function dispArr(arr) {
  for (var i = 0; i < arr.length; ++i) {
    process.stdout.write(arr[i] + " ");
    if (i % 10 == 9) {
      process.stdout.write("\n");
    }
  }
  if (i % 10 != 0) {
    process.stdout.write("\n");
  }
}

var MAX = 50
var sort = require('./src/sorting/heapsort2.js').heapSort;
/*var values = [];
for (var i = 0; i < MAX; ++i) {
  values[i] = Math.floor(Math.random() * MAX+1);
}

console.log('\nBefore: ');
dispArr(values);
console.log('\nAfter: ');

dispArr(sort(values)); 
*/
var classVal = [40,7,41,13,19,92,51,31];
console.log('\nBefore: ');
dispArr(classVal);
console.log('\nAfter: ');
dispArr(sort(classVal));

