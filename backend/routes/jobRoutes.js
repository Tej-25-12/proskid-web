const express = require('express');
const router = express.Router();
const { getJobs, getJobById, createJob } = require('../controllers/jobController');

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJobById);

module.exports = router;
