const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String }, // Icon identifier or image path
    summary: { type: String, required: true },
    description: { type: String, required: true },
    benefits: [String],
    process: [String],
    industries: [String],
    image: { type: String }
});

module.exports = mongoose.model('Service', serviceSchema);
