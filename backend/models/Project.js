const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    client: { type: String },
    location: { type: String },
    completedAt: { type: Date }
});

module.exports = mongoose.model('Project', projectSchema);
