const name=require('./module2')
const sayHi=require('./module3')
const ma=require('./modulealternate')

console.log(name.peter);
console.log(name.john);
sayHi(name.john)
console.log(ma.item);
console.log(ma.singlePerson);
require('./mind-grenade')




