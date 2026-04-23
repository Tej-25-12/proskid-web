const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitApplication, getApplications, updateApplicationStatus } = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/resumes/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

router.route('/')
    .get(protect, getApplications)
    .post(upload.single('resume'), submitApplication);

router.route('/:id/status').put(protect, updateApplicationStatus);

module.exports = router;
