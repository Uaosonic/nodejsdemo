class Player {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    show(){
        console.log(`${this.name}的性别是${this.sex}。`);
    }
    static info(){
        console.log("这是一个球员类，您可以使用它建立自己的球员。");
    }   //不用实例化就能引用的方法称为静态方法
}

let player = new Player("sonic","man");
console.log(player.name,player.sex);
player.show();

Player.info();