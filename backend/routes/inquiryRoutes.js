const express = require('express');
const router = express.Router();
const { createInquiry, getInquiries } = require('../controllers/inquiryController');

router.route('/').get(getInquiries).post(createInquiry);

module.exports = router;
