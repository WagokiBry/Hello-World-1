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

function sumTo(n){
    if(n==0){
        return 0
    }
    return n + sumTo(n-1)
}

console.log(sumTo(4))