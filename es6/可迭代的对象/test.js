class Player {
    constructor(list){
        this.list = list;
    }
    [Symbol.iterator](){    //固定写法
        let current = 0;
        let that = this;    //保留当前对象
        return {
            next(){ //next用于每次的迭代
                return current < that.list.length ? {value:that.list[current++],done:false} :
                {done:true};
            }
        };
    }
} 

let player = new Player(['Curry','Harden','LeBorn']);
for(let tmp of player){
    console.log(tmp);
}