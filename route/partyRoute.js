const express = require('express');
const router = express.Router();
const { getPartyById , getAllParties } = require('../controller/Party.js');

router.get('/party-details/:id', getPartyById);
router.get('/party-details', getAllParties);

module.exports = router;
