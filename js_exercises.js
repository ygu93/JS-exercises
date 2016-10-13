function uniq (array) {
  let unique = [];
  for (var i = 0; i < array.length; i++) {
    if (unique.includes(array[i]) === false){
      unique.push(array[i]);
    }
  }
  return unique
}

console.log(uniq([1,1,2,3,3,2,5]))

function twoSum (array, target) {
  let result = [];
  for (var i = 0; i < (array.length-1); i++) {
    for (var j = i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result
}

console.log(twoSum([1,2,3,4,5,6,7,8], 9));

function myTranspose(array){
  let result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = [];
    for (var j = 0; j < array.length; j++) {
      result[i].push(array[j][i]);
    }
  }
  return result
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));


Array.prototype.myEach = function(cb){
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return this
}
let arr = [1,2,3,4,5]
let a =[]
console.log(arr.myEach(el => a.push(el*2)));
console.log(a)

Array.prototype.myMap = function(cb){
  let result = [];
  this.myEach(function(el){
    result.push(cb(el));
  });
  // this.myEach(el => result.push(cb(el)));
  return result;
}

console.log(arr.myMap(el => el*2));

Array.prototype.myInject = function(cb, default_val = null ) {
  this.myEach(function(el){
    if (default_val === null) {
      default_val = el;
    }else{
      default_val = cb(default_val, el);
    }
  });

  return default_val;
}

console.log(arr.myInject(function(sum, number){
  sum += number;
  return sum;
}, 5));
