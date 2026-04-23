const mongoose = require('mongoose');

const sisterCompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String },
    description: { type: String, required: true },
    specialization: { type: String, required: true },
    services: [String],
    strengths: [String],
    contact: {
        email: String,
        phone: String,
        address: String
    }
});

module.exports = mongoose.model('SisterCompany', sisterCompanySchema);
