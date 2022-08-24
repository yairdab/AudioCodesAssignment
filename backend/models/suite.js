import mongoose from 'mongoose';

const suiteSchema = mongoose.Schema({
    title: String,
    requirement: String,
    assignee: String,
    run: String,
    status: String,
    description: String
});

var Suite = mongoose.model('Suite', suiteSchema);

export default Suite;