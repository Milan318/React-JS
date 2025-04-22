// array method

// push
// let array = [1,2,3,4,5,6,];
// array.push(7);
// console.log(array);

// pop
// let array = [1,2,3,4,5];
// array.pop();
// console.log(array);

// unshift
// let array = [1,2,3,4,5];
// array.unshift(5);
// console.log(array);

// shift
// let array = [1,2,3,4,5];
// array.shift();
// console.log(array);

// spreading operator (merge object and array)
// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];

// let arr = [...array1,...array2];
// console.log(arr);

// map
// let array = [1,2,3,4,5,];
// array.map((value,index)=>{
//     console.log(value);
    
// })

// slice
// let array = [1,2,3,4,5];
// let arr=array.slice(0,3);
// console.log(arr);

// splice
// let array = [1,2,3,4,5];
// let arr=array.splice(2,3);
// console.log(arr);

// filter
let array = [1,2,3,4,5,6,7,8,9];
let arr = array.filter((value,index)=>{
    if(value %2==0) return value;
});
console.log(arr);





