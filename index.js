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
function fibonacci (n){
  if(n < 2){
    return n
  }

  return (fibonacci(n-1) + fibonacci(n-2))
}

console.log(fibonacci(7))
