import Reference from '../models/Reference';

export = async (req: any, res: any) => {
    res.json('ok')

    const reference = new Reference();

    reference.name = req.body.name;
    reference.category = req.body.category;
    reference.brand = req.body.brand;
    reference.power = req.body.power;
    reference.price = req.body.price;
    reference.weight = req.body.weight;
    reference.length = req.body.length;
    reference.familly = req.body.familly;
    reference.category = req.body.category;
    reference.familly = 'test, ENT ENT';

    reference.create();
};