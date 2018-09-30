class Player {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }

    get aa(){
        return this._age;
    }
    set aa(val){
        this._age = val;
    }
}

let player = new Player("sonic","male");
console.log(player);
player.aa = 28;
console.log(player);
console.log(player._age);
console.log(player.aa);