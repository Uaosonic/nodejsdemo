class Car {
    constructor(brand){
        this.brand = brand;
    }
    show(){
        console.log(`本车品牌是${this.brand}`);
    }
}

class Lexus extends Car {   //extends继承父类
    constructor(brand, lineup) {
        super(brand);   //super是调用父类
        this.lineup = lineup;
    }
    getPrice(){
        switch(this.lineup){
            case "RX":
                return 60;
            case "NX":
                return 40;
            default:
                throw new Error("未知车类别");
        }
    }
}

let mycar = new Lexus("Lexus", "RX");
mycar.show();
console.log("价格是：",mycar.getPrice(),"万");