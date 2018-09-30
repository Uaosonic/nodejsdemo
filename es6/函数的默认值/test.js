//字符参数
// function sayhello(name = "sonic"){
//     console.log(`hello ${name}`);
// }
// sayhello(); //hello sonic
// sayhello("abc");    //hello abc

//数值计算
// function add(a = 1, b = a){
//     return a+b;
// }
// console.log(add()); //2
// console.log(add(10));   //20
// console.log(add(10,20));    //30

//必须指定参数
function required(){
    throw new Error("参数未指定");
}
function saybye(name = required()){
    console.log(`${name} bye!`);
}
saybye();   //Error: 参数未指定