// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // prepend the new value to the list
// list = { value: "new item", next: list };
// console.log(list.next.value)

// function sumTo (n){
// let sum = 0;
// for(let i = 1;i <=n ; i++){
//     sum+=i
// }
// return sum
// }

// console.log(sumTo(100))
function getFirst(arr) {
  return arr[0];
}

function sum(arr) {
  let total = 0;
  for (let x of arr) {
    total += x;
  }
  return total;
}
console.log(getFirst([1, 2, 3, 4, 5]));
console.log(sum([1, 2, 3, 4, 5]));


function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
console.log(printPairs([1, 2, 3]));  

function tricky(arr) {
  for (let i = 0; i < arr.length; i++) {   // runs n times
    for (let j = 0; j < 3; j++) {          // runs 3 times (constant)
      console.log(arr[i], j);
    }
  }
}
console.log(tricky([10, 20, 30,40]));

function problem4(arr) {
  console.log(arr[0]);          // O(1)
  
  for (let x of arr) {          // O(n)
    console.log(x);
  }

  for (let i = 0; i < arr.length; i++) {   // Outer
    for (let j = 0; j < arr.length; j++) { // Inner
      console.log(i, j);                    // O(n²)
    }
  }
}
