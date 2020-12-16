import db from '../helpers/dbConfig'

type Status = -1 | 0 | 1 // -1 banned, 0 not verified, 1 verified  

export default class Reference {
    private tableName: String;
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
        this.tableName = 'airsoft_references';
        this.id = 0;
        this.name = '';
        this.category = 'unknowned';
        this.status = 0
        this.brand = 'unknowned';
        this.power = 0;
        this.price = 0;
        this.weight = 0;
        this.length = 0;
        this.familly = 'unknowned';
        this.image = '';
        this.contributors = [];
    }
  
    create = async (): Promise<Boolean> => {

        try {

            const [result] = await db.promise().execute(`INSERT INTO ${this.tableName} (name, category, brand, power, price, weight, length, familly, image) VALUES (?,?,?,?,?,?,?,?,?)`, 
            [this.name, this.category, this.brand, this.power, this.price, this.weight, this.length, this.familly, this.image]);

            if (result) {
                //this.id = result.insertId;
                console.log('ok')

                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    delete = (): Boolean => {return false}
    update = (): Boolean => {return false}
}