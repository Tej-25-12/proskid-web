const SisterCompany = require('../models/SisterCompany');

// @desc    Get sister company details
// @route   GET /api/sister-company
// @access  Public
const getSisterCompany = async (req, res) => {
    try {
        const company = await SisterCompany.findOne({});
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update sister company details
// @route   PUT /api/sister-company
// @access  Private/Admin
const updateSisterCompany = async (req, res) => {
    try {
        let company = await SisterCompany.findOne({});
        
        if (company) {
            company = await SisterCompany.findOneAndUpdate({}, req.body, { new: true });
            res.json(company);
        } else {
            company = await SisterCompany.create(req.body);
            res.status(201).json(company);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getSisterCompany,
    updateSisterCompany
};
