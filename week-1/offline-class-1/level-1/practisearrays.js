//Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

let arr = [1,2,3,4,5];
arr.push(6)
console.log("after push: "+arr);
arr.pop()
console.log("after pop: "+arr);
arr.shift();
console.log("after shift: "+arr);
arr.unshift(999)
console.log("after unshift "+arr);
let sum=0;
arr.map(addfn);
function addfn(num){
    sum=sum+num;
}
console.log(sum);