const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    employmentType: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [String],
    salary: { type: String, default: 'Negotiable' },
    isUrgent: { type: Boolean, default: false },
    postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
