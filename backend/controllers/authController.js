const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await Admin.findOne({ email });

        if (admin && (await admin.matchPassword(password))) {
            res.json({
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                token: generateToken(admin._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get admin profile
// @route   GET /api/auth/profile
// @access  Private
const getProfile = async (req, res) => {
    const admin = await Admin.findById(req.user._id);

    if (admin) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
        });
    } else {
        res.status(404).json({ message: 'Admin not found' });
    }
};

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = { login, getProfile };
