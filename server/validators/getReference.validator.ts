import {check, validationResult} from 'express-validator';

export const getReferenceValidation = [

    check('id')
        .exists()
        .withMessage({name: 'noReferenceId', message: 'There is no reference id.'})
        .isInt({min: 1})
        .withMessage({name: 'invalidReferenceId', message: 'Invalid reference id.'}),
        
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