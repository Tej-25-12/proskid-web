const express = require('express');
const router = express.Router();
const { getSisterCompany, updateSisterCompany } = require('../controllers/sisterCompanyController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getSisterCompany).put(protect, updateSisterCompany);

module.exports = router;
