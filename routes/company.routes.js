const router = require("express").Router();
const mongoose = require('mongoose');

const Company = require('../models/Company.model');
const Job = require('../models/Job.model');

const {isAuthenticated} = require("../middleware/jwt.middleware")


//READ list of companies 
router.get('/companies', (req, res, next) => {
    Company.find()
        .populate("job")
        .then(allCompanies => {
            res.json(allCompanies)
        })
        .catch(err => res.json(err));
});


//CREATE new company
router.post('/companies', isAuthenticated, (req, res, next) => {
   const companyDetails = {
    name: req.body.name,
    job: req.body.job,
    description: req.body.description,
    address: req.body.address,
    owner: req.payload._id
   }

    Company.create({ companyDetails })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});


//READ company details
router.get('/companies/:companyId', (req, res, next) => {
    const { companyId } = req.params;

    //validate companyId
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Company.findById(companyId)
        .populate('job')
        .then(company => res.status(200).json(company))
        .catch(error => res.json(error));
});


//UPDATE company
router.put('/companies/:companyId', (req, res, next) => {
    const { companyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(companyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Company.findByIdAndUpdate(companyId, req.body, { new: true })
        .then((updatedCompany) => res.json(updatedCompany))
        .catch(error => res.json(error));
});


//DELETE company
router.delete('/companies/:companyId', (req, res, next) => {
    const { companyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(companyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Company.findByIdAndRemove(companyId)
        .then(deteletedCompany => {
            return Job.deleteMany({ _id: { $in: deteletedCompany.jobs } });
        })
        .then(() => res.json({ message: `Company with id ${companyId} & all associated jobs were removed successfully.` }))
        .catch(error => res.status(500).json(error));
});

module.exports = router;
