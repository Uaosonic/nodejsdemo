//作为常量
// const java = Symbol();
// const php = Symbol();
// const ruby = Symbol();
// const vb = Symbol();
// const perl = Symbol();

// var lang = java;

// if(lang === java){
//     console.log(lang);  //Symbol()
//     console.log(java);  //Symbol()
//     console.log("java的未来在哪里？");
// }
// if(lang === php){
//     console.log(lang);
//     console.log(php);
//     console.log("php是世界上最好的语言");
// }

//作为属性
// let s1 = Symbol("mysymbol");
// let s2 = Symbol("mysymbol");

// var obj = {};
// obj[s1] = "hello";
// obj[s2] = "world";

// console.log(obj);   //{ [Symbol(mysymbol)]: 'hello', [Symbol(mysymbol)]: 'world' }
// console.log(obj[s1]);   //hello
// console.log(obj[s2]);   //world

    // let s1 = String("mysymbol");
    // let s2 = String("mysymbol");

    // var obj = {};
    // obj[s1] = "hello";
    // obj[s2] = "world";

    // console.log(obj);   //{ mysymbol: 'world' }
    // console.log(obj[s1]);   //world
    // console.log(obj[s2]);   //world

//半隐藏属性
// const mykey = Symbol();
// class User{
//     constructor (key,name,age){
//         this[mykey] = key;
//         this.name = name;
//         this.age = age;
//     }
//     checkKEY(key){
//         return this[mykey] === key;
//     }
// }

// let user = new User(123,'curry',29);
// console.log(user[mykey],user.name,user.age);    //123 'curry' 29
// console.log(user.checkKEY(123));    //true
// console.log(user.checkKEY(456));    //false
// console.log(Object.keys(user));     //[ 'name', 'age' ](该方法为列出user变量中的所有属性)
// console.log(JSON.stringify(user));  //{"name":"curry","age":29}（字符串化把user打印出来）
// //只有知道symbol属性的人才能使用，不知道的就无法使用

function MyClass(name,age){
    this.name = name;
    this.age = age;
    this.toString = function(){
        console.log(this.name +":"+ this.age);
    };
}

var cls1 = new MyClass("liming",10);
cls1.toString(); 
