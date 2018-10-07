module.exports = function getZerosCount(number, base) {
  // your implementation


  const simpleList = getNum(base);
let initObj = {};

simpleList.forEach(el => {
if(initObj[el] == null) {
initObj[el] = 1;
} else {
const newCount = initObj[el] + 1;
initObj[el] = newCount;
}
})
const uniqueItems = Array.from(new Set(simpleList));

let resNum = uniqueItems.map(el => Math.floor(maxPowerOf(el, number) / initObj[el]));
const sorted = resNum.sort((a, b) => a-b);

return sorted[0]; 
}

function getNum(x, arr = [], num = 2) { 
if (x === '1') {
arr.push(1);
}
if(x % num === 0){
arr.push(num);
x = x / num;

arr = getNum(x, arr, num); 

} else if(x % num !== 0){
if(!(x <= num)){
num++;
arr = getNum(x, arr, num);
}
}
return arr;
}

function maxPowerOf(p, n) {
let k = 0;
let powerOfP = 1;
while (true)
{
powerOfP *= p; 
let addend = Math.floor(n / powerOfP);
if (addend == 0)
return k;
k += addend;
}
}
