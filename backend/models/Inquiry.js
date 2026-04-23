const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    type: { type: String, enum: ['General', 'Business', 'Callback'], default: 'General' },
    status: { type: String, enum: ['New', 'Contacted', 'Resolved'], default: 'New' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiry', inquirySchema);
