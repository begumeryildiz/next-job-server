const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const jobSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        company: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
            required: true,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        skills: {
            type: String,
            required: true,
            trim: true
        },
        level: {
            type: String,
            required: true,
            trim: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,           
        },
        applicants: [{
            type: Schema.Types.ObjectId,
            ref: 'Candidate'
        }]
    },
    {
        timestamps: true
    }
);

module.exports = model('Job', jobSchema);