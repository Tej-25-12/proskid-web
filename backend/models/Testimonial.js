const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String },
    content: { type: String, required: true },
    rating: { type: Number, default: 5 },
    image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
