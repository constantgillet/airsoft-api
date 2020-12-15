import express from 'express';
const router = express.Router();
import TestController from './controllers/test.controller';

/// ROUTES ///

// GET home page.
router.get('/', TestController.test);

//Create a reference
router.post('/references');

//Get references
router.get('/references');

//Update references
router.put('/references/:id');
router.delete('/references/:id');

export { router };