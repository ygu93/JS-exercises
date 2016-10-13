function range (start, end){
  let result = [];
  if ((start > end) || (start+1 === end)) {
    return [];
  }else{
    result = [start+1].concat(range(start+1, end));
  }

  return result;
}

// console.log(range(1, 6));

function sumIterArray(array){
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

// console.log(sumIterArray([1,2,3,4,5]));

function sumRecArray(array){
  let sum = 0
  if(array.length === 0){
    return sum;
  }else if(array.length === 1){
    return array[0];
  }else{
    sum = array[0] + sumRecArray(array.slice(1, array.length));
  }
  return sum;
}

// console.log(sumRecArray([1,2,3,4,5]));

function exp1(b, n){
  if(n===0){
    return 1;
  }else {
    return b * exp1(b, n-1);
  }
}

// console.log(exp1(2,0));
// console.log(exp1(2,4));
// console.log(exp1(10,2));

function exp2(b,n){
  if(n===0){
    return 1;
  }else{
    if(n%2 === 0){
      return Math.pow(exp2(b, (n/2)), 2);
    }else {
      return b * Math.pow(exp2(b, ((n-1)/2)), 2);
    }
  }
}

// console.log(exp2(2,0));
// console.log(exp2(2,4));
// console.log(exp2(10,2));
// 1 1 2 3 5 8

function fib(n){
  if (n < 1){
    return [];
  }else if (n === 1){
    return [1];
  }else if (n === 2) {
    return [1,1];
  }else{
    sequence = fib(n-1);
    new_number = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return sequence.concat([new_number]);
  }
}

// console.log(fib(6));

function bsearch(array, target){
  if (array.length < 1) {
    return null;
  }
  let mid_idx = Math.floor(array.length / 2);

  if(array[mid_idx] === target){
    return mid_idx;
  }
  else if(array[mid_idx] > target){
    return  bsearch(array.slice(0, mid_idx), target);
  }
  else{
    let x = bsearch(array.slice((mid_idx + 1), array.length), target);
    if (x === null) {
      return null;
    }else{
      return x + mid_idx + 1
    }
  }

}

// console.log(bsearch([1,2,3], 0))
// console.log(bsearch([2, 3, 4, 5], 5))
// console.log(bsearch([2, 3, 4, 5], 3))

function make_change (amt, coins) {
  if (amt === 0) {
    return [];
  }
  let best_solution = []
  coins.forEach(function(coin){
    let coin_tracker = [];
    if (coin <= amt) {
      let remainder = amt - coin
      coin_tracker.push(coin);
      let remaining_change = make_change(remainder, coins)
      coin_tracker = coin_tracker.concat(remaining_change);
      if (best_solution.length === 0) {
        best_solution = coin_tracker
      }
      else if (coin_tracker.length < best_solution.length) {
        best_solution = coin_tracker
      }
    }
  });
  return best_solution;
}

// console.log(make_change(14, [10, 7, 1]));

function merge_sort (array) {
  if (array.length <= 1) {
    return array;
  }
  let mid_idx = Math.floor(array.length / 2);

  return merge(merge_sort(array.slice(0, mid_idx)), merge_sort(array.slice(mid_idx)));
}

function merge(left, right) {
  let sorted = [];
  let i = 0;
  while ((i < left.length) && (i < right.length)) {
    if(left[i] > right[i]){
      sorted.push(right.shift());
    }
    else{
      sorted.push(left.shift());
    }
  }
  if(left.length > right.length){
    sorted = sorted.concat(left);
  }
  else if(left.length < right.length){
    sorted = sorted.concat(right);
  }
  return sorted;
}

// console.log(merge([6,7,8,9,10],[1,2,3,4,5]))
// console.log(merge_sort([5,3,4,2,1]))

function subsets (array) {
  if (array.length === 0 ) {
    return [[]];
  }
  let el = array.pop();
  let current_subs = subsets(array);
  console.log(current_subs);
  let new_entries = []
  for (var i = 0; i < current_subs.length; i++) {
    if (i === 0){
      new_entries.push([el])
    }else{
      new_entries.push(current_subs[i].concat([el]));
    }
  }
  return current_subs.concat(new_entries)
}

console.log(subsets([1,2,3]));
