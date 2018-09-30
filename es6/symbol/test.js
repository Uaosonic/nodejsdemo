let str1 = String("helloworld");
let str2 = String("helloworld");
console.log(str1 == str2);  //true
console.log(str1 === str2); //true

let s1 = Symbol("mysymbol");
let s2 = Symbol("mysymbol");
console.log(typeof s1); //symbol
console.log(s1.toString()); //Symbol(mysymbol)
console.log(s1 == s2);  //false
console.log(s1 === s2); //false
console.log(s1);    //Symbol(mysymbol)