console.log(0b10);  //2进制
console.log(0o10);  //8进制
console.log(0x10);  //16进制

console.log(0b11 === 3);    //true，三等号表示类型和值都等于
console.log(0o11 === 8);    //true
console.log(0x10 === 16);   //true

let num = 10;
console.log(num.toString(2));   //转换为2进制表达形式
console.log(num.toString(8));   //8进制
console.log(num.toString(16));  //16进制
console.log(num.toString(5));   //5进制