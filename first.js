let n = prompt("enter the number : ");

let arr = [];

for(let i=1; i<=n; i++ ) {
    arr[i-1] = i;
}

console.log(arr);

const output = arr.reduce((res,cur) => {
    return res + cur;
})

console.log(output);

const reduce = arr.reduce((res,cur) => {
    return res * cur;
})

console.log(reduce);