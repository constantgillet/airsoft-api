import Reference from '../models/Reference';
import {resizeImage, fileNameToJPG} from '../helpers/imageHelper';

export = async (req: any, res: any) => {

    const reference = new Reference();

    resizeImage(req.file.path, 'uploads/' + req.file.filename);

    reference.name = String(req.body.name);
    reference.category = String(req.body.category);
    reference.brand = String(req.body.brand);
    reference.power = Number(req.body.power);
    reference.price = Number(req.body.price);
    reference.weight = Number(req.body.weight);
    reference.length = Number(req.body.length);
    reference.familly = String(req.body.familly);
    reference.category = String(req.body.category);
    reference.image = String('/uploads/' + fileNameToJPG(req.file.filename));

    reference.create();

    return res.status(201).json({
        code: 201,
        status: 'success',
        message: 'Reference created'
    });
};


