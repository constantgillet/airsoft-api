import {check, validationResult} from 'express-validator';

export const addReferenceValidation = [

    check('name')
        .exists()
        .withMessage({name: 'missingName', message: 'There is no name.'})
        .trim()
        .isString()
        .isLength({min: 4, max: 32})
        .withMessage({name: 'invalidNameLength', message: 'Name length is invalid.'}),

    check('category')
        .exists()
        .withMessage({name: 'missingCategory', message: 'There is no category.'}),

    check('brand')
        .exists()
        .withMessage({name: 'missingBrand', message: 'There is no brand.'})
        .trim()
        .isString()
        .isLength({min: 3, max: 32})
        .withMessage({name: 'invalidBrandLength', message: 'Name length is invalid.'}),

    check('power')
        .exists()
        .withMessage({name: 'missingPower', message: 'There is no power value.'})
        .isFloat({min: 50, max: 520})
        .withMessage({name: 'invalidPowerValue', message: 'There is no power value'}),

    check('price')
        .exists()
        .withMessage({name: 'missingPice', message: 'There is no price value.'})
        .isFloat({min: 5, max: 2000})
        .withMessage({name: 'invalidPriceValue', message: 'There is no price value'}),

    check('weight')
        .exists()
        .withMessage({name: 'missingWeight', message: 'There is no weight.'})
        .isFloat({min: 5, max: 2000})
        .withMessage({name: 'invalidWeightValue', message: 'There is no weight value'}),

    check('length')
        .exists()
        .withMessage({name: 'missingLength', message: 'There is no length.'})
        .isFloat({min: 5, max: 2000})
        .withMessage({name: 'invalidLength', message: 'There is no length value'}),
    
    check('familly')
        .exists()
        .withMessage({name: 'missingFamilly', message: 'There is no familly.'}),

    check('email')
        .exists()
        .withMessage({name: 'missingEmail', message: 'There is no email.'})
        .trim()
        .isEmail()
        .withMessage({name: 'invalidEmail', message: 'The email is not valid'}),

    check('image')
        .custom((value, {req}) => {

            console.log(req.file.mimetype)
            if(req.file.mimetype === 'image/png' || req.file.mimetype === 'image/jpeg' || req.file.mimetype === 'image/jpg'){
                return true; // return "non-falsy" value to indicate valid data"
            }else{
                return false; // return "falsy" value to indicate invalid data
            }
        })
        .withMessage({name: 'invalidImageMimetype', message: 'Image is not valid'}),
        
    (req: any, res: any, next: any) => {

        const errors = validationResult(req);

        //Get errors
        if (!errors.isEmpty()) {
            
            return res.status(422).json(
                { 
                    code: 422,
                    status: 'error',
                    message: 'An error has happened',
                    error: errors.array()[0].msg
                }    
            );
        }

        next();
    },
];