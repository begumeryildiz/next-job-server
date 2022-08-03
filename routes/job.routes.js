const router = require("express").Router();
const mongoose = require('mongoose');

const Job = require('../models/Job.model');

const { isAuthenticated } = require("../middleware/jwt.middleware")


//READ list of jobs 
router.get('/jobs', (req, res, next) => {
    Job.find()
        .populate("company")
        .then(allJobs => {
            res.json(allJobs)
        })
        .catch(err => res.json(err));
});


//CREATE new job
router.post('/jobs', isAuthenticated, (req, res, next) => {
    const jobDetails = {
        title: req.body.title,
        company: req.body.company,
        description: req.body.description,
        skills: req.body.skills,
        level: req.body.level
    };

    Job.create({ jobDetails })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});


//READ job details
router.get('/jobs/:jobId', (req, res, next) => {
    const { jobId } = req.params;

    //validate jobId
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Job.findById(jobId)
        .populate('company')
        .then(job => res.status(200).json(job))
        .catch(error => res.json(error));
});


//UPDATE job
router.put('/jobs/:jobId', (req, res, next) => {
    const { jobId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Job.findByIdAndUpdate(jobId, req.body, { new: true })
        .then((updatedJob) => res.json(updatedJob))
        .catch(error => res.json(error));
});


//DELETE job
router.delete('/jobs/:jobId', (req, res, next) => {
    const { jobId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Job.findByIdAndRemove(jobId)
        .then(deletedJob => res.json(deletedJob))
        .then(() => res.json({ message: `Job with id ${jobId} was removed successfully.` }))
        .catch(error => res.status(500).json(error));
});

module.exports = router;
