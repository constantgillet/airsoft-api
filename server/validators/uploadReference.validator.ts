import multer from 'multer';
import fs from 'fs';

/**
 * Image upload config
 */
const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        const dir = './uploads/tmp/';

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        cb(null, dir);
    },
    filename: function (req: any, file: any, cb: any) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const fileFilter = (req: any, file: any, cb: any) => {

    //Accept
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        //reject a file
        cb(null, false)
    };
};

const upload = multer({
    storage: storage,
    limits: { 
        fileSize: 3 * 1024 * 1024 //3mo
    }, 
    fileFilter: fileFilter
});

//Parse data of the form
const addReferenceUpload = upload.single('image');

export {addReferenceUpload}