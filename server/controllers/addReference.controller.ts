import Reference from '../models/Reference';
import {resizeImage, fileNameToJPG} from '../helpers/imageHelper';

export = async (req: any, res: any) => {

    const reference = new Reference();

    resizeImage(req.file.path, 'uploads/' + req.file.filename);

    reference.name = req.body.name;
    reference.category = req.body.category;
    reference.brand = req.body.brand;
    reference.power = req.body.power;
    reference.price = req.body.price;
    reference.weight = req.body.weight;
    reference.length = req.body.length;
    reference.familly = req.body.familly;
    reference.category = req.body.category;
    reference.image = '/uploads/' + fileNameToJPG(req.file.filename);

    reference.create();

    return res.status(201).json({
        code: 201,
        status: 'success',
        message: 'Reference created'
    });
};


