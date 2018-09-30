class MyList {
    constructor(list){
        this.list = list;
        this[Symbol.iterator] = function*(){    //构造器中写迭代属性
            let current = 0;
            let that = this;
            while(current < that.list.length){
                yield that.list[current++];
            }
        }
    }
}

let myList = new MyList([100,200,300,400,500]);
for(let val of myList){
    console.log(val);
}