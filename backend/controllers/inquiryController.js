const Inquiry = require('../models/Inquiry');

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        const createdInquiry = await inquiry.save();
        res.status(201).json(createdInquiry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private/Admin
const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createInquiry,
    getInquiries
};
