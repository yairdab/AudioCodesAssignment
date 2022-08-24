import express from 'express';

import TestCase from '../models/testCase.js';
import Suite from '../models/suite.js';

const router = express.Router();

export const getTestCases = async (req, res) => { 
    console.log("Inside getTestsCases");
    try {
        const testCases = await TestCase.find();

        res.status(200).json(testCases);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getSuites = async (req, res) => { 
    console.log("Inside getSuites");

    try {
        const suite = await Suite.find();

        res.status(200).json(suite);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveNewTestCase = async (req, res) => { 
        const { testCase } = req.body;
        const newTestCase = new TestCase(testCase)
        try {
            await newTestCase.save();

            res.status(201).json(newTestCase);
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
}

export const saveNewSuites = async (req, res) => { 
    const options = {
        ordered: false,
        silent: true,
        keepGoing: true,
        continueOnError: 1,
        safe: true
    };

    console.log(req.body)
    const {suites} = req.body;

    Suite.insertMany(suites, options).then((docs) => {
        res.status(201).json(docs);
      }).catch((error) => {
        console.log(error);
        res.status(200).json([]);
      }); 
}

export const deleteTestCases = async (req, res) => { 
    const {testCases} = req.body;
    const testCasesIds = testCases.map(testCase => testCase._id);

    await TestCase.deleteMany({_id: {$in: testCasesIds}});
    res.status(200).json([]);
}

export const deleteSuites = async (req, res) => { 
    console.log(req.body);
    const {suites} = req.body;
    const suiteIds = suites.map(suite => suite._id);
    console.log(suiteIds);

    await Suite.deleteMany({_id: {$in: suiteIds}});
    res.status(200).json([]);
}


export default router;
