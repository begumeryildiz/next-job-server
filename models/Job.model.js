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

jobSchema.index({"$**": "text"});
jobSchema.on('index', error => {
    // "_id index cannot be sparse"
    console.log(error.message);
  });
console.log(jobSchema.indexes());
module.exports = model('Job', jobSchema);