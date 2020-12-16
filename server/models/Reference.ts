type Status = -1 | 0 | 1 // -1 banned, 0 not verified, 1 verified  

export default class Reference {
    id: Number;
    name: String;
    category: String;
    status: Status;
    brand: String;
    power: Number;
    price: Number;
    weight: Number;
    length: Number;
    familly: String;
    image: String;
    contributors: Array<Object>;
  
    constructor() {
        this.id = 0;
        this.name = '';
        this.category = 'unknowned';
        this.status = 0
        this.brand = '';
        this.power = 0;
        this.price = 0;
        this.weight = 0;
        this.length = 0;
        this.familly = 'unknowned';
        this.image = '';
        this.contributors = [];
    }
  
    create = (): Boolean => {return false}
    delete = (): Boolean => {return false}
    update = (): Boolean => {return false}
}