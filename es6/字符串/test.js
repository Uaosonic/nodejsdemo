let name = "sonic"
let mystr1 = "你好，${name}!"
let mystr2 = `你好，${name}! 再见`  //反单引号

console.log(mystr1);
console.log(mystr2);

function a(b, ...c){
    console.log(b);
    console.log(c);
}
a`你好，${name}! 再见`;