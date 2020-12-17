import db from '../helpers/dbConfig';
import elasticSearchClient from '../helpers/elasticSearchClient';

type Status = -1 | 0 | 1 // -1 banned, 0 not verified, 1 verified  

export default class Reference {
    private tableName: string;
    id: number;
    name: string;
    category: string;
    status: Status;
    brand: string;
    power: number;
    price: number;
    weight: number;
    length: number;
    familly: string;
    image: string;
    contributors: Array<object>;
  
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
  
    create = async (): Promise<boolean> => {

        try {

            const [_result] = await db.promise().execute(`INSERT INTO ${this.tableName} (name, category, brand, power, price, weight, length, familly, image) VALUES (?,?,?,?,?,?,?,?,?)`, 
            [this.name, this.category, this.brand, this.power, this.price, this.weight, this.length, this.familly, this.image]);

            const result: any = _result

            if (result) {
                //this.id = result.insertId;
                console.log(result, result.insertId)
                this.id = result.insertId
                const id:any = this.id;
                const status:any = this.status;

                elasticSearchClient.index({
                    index: 'airsoft-api-references',
                    id: id,
                    type: 'object',
                    body: {
                        id: this.id,
                        name: this.name,
                        category: this.category,
                        status: String(this.status),
                        brand: this.brand,
                        power: this.power,
                        price: this.price,
                        weight: this.weight,
                        length: this.length,
                        familly: this.familly,
                        image: this.image 
                    },
                }, (err) => {
                    //console.log(resp);

                    if (err) {
                      console.log(err)  
                      return false;
                    }
                });

                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.error(err);
            return false;
        }
    }

    getData = async (): Promise<boolean> => {
        try {
            const [rows, fields]  = await db.promise().execute(`SELECT * from ${this.tableName} WHERE id = ?`, [this.id]);

            const result: any = rows

            if (result.length > 0) {
                
                const data = result[0];
                this.name = data.name;
                this.category = data.category;
                this.status = data.status;
                this.brand = data.brand;
                this.power = data.power;
                this.price = data.price;
                this.weight = data.weight;
                this.length = data.length;
                this.familly = data.familly;
                this.image = data.image;

                return true;

            } else {
                return false;
            }

        } catch (err) {
            console.error(err);
            return false;
        }        
    }

    update = (): boolean => {return false}

    delete = (): boolean => {return false}

}