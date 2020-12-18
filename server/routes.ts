import express from 'express';
const router = express.Router();
import rateLimitMiddleware from './helpers/ratelimit';

import addReferenceController from './controllers/addReference.controller';
import getReferenceController from './controllers/getReference.controller';
import getAllReferencesController from './controllers/getAllReferences.controller';

import {addReferenceValidation} from './validators/addReference.validator';
import {addReferenceUpload} from './validators/uploadReference.validator';
import {getReferenceValidation} from './validators/getReference.validator';
import {getAllReferencesValidation} from './validators/getAllReferences.validator';

/**
 * ROUTES
*/

//Create a reference
router.post('/references', addReferenceUpload, addReferenceValidation, addReferenceController);

//Get references
router.get('/references', getAllReferencesValidation, getAllReferencesController);

//Get references
router.get('/references/:id', getReferenceValidation, getReferenceController);

//Update references
router.put('/references/:id');
router.delete('/references/:id');

export { router };