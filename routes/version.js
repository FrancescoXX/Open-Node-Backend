const express = require('express');
const versionController = require('../controllers/version');
const router = express.Router();

// GET .../version/current
router.get('/current', versionController.getVersion);

// GET .../version/info
router.get('/info', versionController.getInfo);

module.exports = router;