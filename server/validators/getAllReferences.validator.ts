import {check, validationResult} from 'express-validator';

export const getAllReferencesValidation = [

    check('q')
        .optional()
        .isString()
        .isLength({min: 1, max: 12})
        .withMessage({name: 'invalidQuery', message: 'Query is not valid'}),

    check('limit')
        .optional()
        .isInt({min: 1, max: 300})
        .withMessage({name: 'invalidLimit', message: 'Limit is not valid'}),

    check('order_by')
        .optional()
        .isString()
        .isLength({min: 1, max: 12})
        .withMessage({name: 'invalidOrderBy', message: 'Order by is not valid'}),
    
    check('category')
        .optional()
        .isString()
        .isLength({min: 1, max: 12})
        .withMessage({name: 'invalidCategory', message: 'Category filter is not valid'}),
        
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