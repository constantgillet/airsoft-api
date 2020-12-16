import Reference from '../models/Reference';

export = async (req: any, res: any) => {

    const reference:Reference = new Reference();
    reference.id = req.params.id;

    const gotData = await reference.getData();

    if (gotData) {

        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'You got the reference',
            data: {
                reference: {
                    name: reference.name,
                    category: reference.category,
                    status: reference.status,
                    brand: reference.brand,
                    power: reference.power,
                    price: reference.price,
                    weight: reference.weight,
                    length: reference.length,
                    familly: reference.familly,
                    image: reference.image
                }
            }
        });

    } else {
        return res.status(404).json({
            code: 404,
            status: 'error',
            error: {
                name: 'referenceNotFound',
                message: 'Reference not found'
            }
        });
    }

};