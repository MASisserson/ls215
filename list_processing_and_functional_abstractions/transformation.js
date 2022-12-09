function myMap(arr, callback) {
  let resultArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    resultArr.push(callback(arr[idx], idx, arr));
  }

  return resultArr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
