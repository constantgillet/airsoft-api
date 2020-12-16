import express from 'express';
const router = express.Router();

import addReferenceController from './controllers/addReference.controller';
import getReferenceController from './controllers/getReference.controller';

import {addReferenceValidation} from './validators/addReference.validator';
import {addReferenceUpload} from './validators/uploadReference.validator';
import {getReferenceValidation} from './validators/getReference.validator';

/**
 * ROUTES
*/

//Create a reference
router.post('/references', addReferenceUpload, addReferenceValidation, addReferenceController);

//Get references
router.get('/references');

//Get references
router.get('/references/:id', getReferenceValidation, getReferenceController);

//Update references
router.put('/references/:id');
router.delete('/references/:id');

export { router };