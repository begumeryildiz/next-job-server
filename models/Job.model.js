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
    },
    {
        timestamps: true
    }
);

module.exports = model('Job', jobSchema);