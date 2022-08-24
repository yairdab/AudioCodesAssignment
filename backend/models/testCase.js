import mongoose from 'mongoose';

const testCasesSchema = mongoose.Schema({
    title: String,
    requirement: String,
    assignee: String,
    run: String,
    status: String,
    description: String
});

var TestCases = mongoose.model('TestCase', testCasesSchema);

export default TestCases;
