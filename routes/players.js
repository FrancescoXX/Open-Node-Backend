const express = require('express');
const playersController = require('../controllers/players');
const router = express.Router();

// GET .../version/current
router.get('', playersController.getAllPlayers);
 
module.exports = router;