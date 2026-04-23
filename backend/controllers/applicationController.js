const Application = require('../models/Application');

// @desc    Submit new application
// @route   POST /api/applications
// @access  Public
const submitApplication = async (req, res) => {
    try {
        const application = new Application({
            ...req.body,
            resume: req.file ? req.file.path : req.body.resume
        });
        const createdApplication = await application.save();
        res.status(201).json(createdApplication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
const getApplications = async (req, res) => {
    try {
        const applications = await Application.find({}).sort({ createdAt: -1 });
        res.json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update application status
// @route   PUT /api/applications/:id
// @access  Private/Admin
const updateApplicationStatus = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (application) {
            application.status = req.body.status || application.status;
            const updatedApplication = await application.save();
            res.json(updatedApplication);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    submitApplication,
    getApplications,
    updateApplicationStatus
};
