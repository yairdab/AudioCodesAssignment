import express from 'express';

import { getTestCases, getSuites, saveNewTestCase, saveNewSuites, deleteTestCases, deleteSuites } from '../controllers/tests.js';

const router = express.Router();

router.get('/testCases', getTestCases);
router.get('/suites', getSuites);
router.post('/saveTestCase', saveNewTestCase);
router.post('/saveSuite', saveNewSuites);
router.delete('/deleteTestCases', deleteTestCases);
router.delete('/deleteSuites', deleteSuites);

export default router;