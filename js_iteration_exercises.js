function factors(number) {
  let result = [];
  for (var i = 1; i <= number; i++) {
    if (number % i === 0){
      result.push(i);
    }
  }
  return result;
}

// console.log(factors(100));

function bubble_sort(array) {
  let unsorted = true;
  while (unsorted === true){
    unsorted = false;
    for (var i = 0; i < array.length-1; i++) {
      if(array[i] > array[i+1]){
        unsorted = true;
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
  }
  return array;
}

// console.log(bubble_sort([1,4,5,7,3,5,6,8,4]));

function substrings(str){
  let subs = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j <= str.length; j++) {
      let slice = str.slice(i, j);
      if (subs.includes(slice) === false){
        subs.push(slice);
      }
    }
  }
  return subs;
}

console.log(substrings("cat"));
