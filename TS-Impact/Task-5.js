var arr = [3, 1, 2, 3, 4, 5, 6, 7, 8];
var even = arr.filter(function (x) { return x % 2 == 0; });
console.log("Even : " + even);
console.log(arr.findIndex(function (x) { return x == 3; }));
