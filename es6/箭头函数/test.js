let list = [1,2,3];

//ES5
let newlist = list.map(function(value,index){
    return value * value;
});
console.log(newlist);

//ES6
newlist = list.map((value,index) => {
    return value*value;
});
console.log(newlist);

newlist = list.map(value => {
    return value*value;    
});
console.log(newlist);