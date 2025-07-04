// routes/guestProfile.js
const express = require("express")
//import { ReturnDocument } from 'mongodb';
//import { createGuestProfile } from '../controllers/guestProfile.js';
const {createGuestProfile , getGuestProfile} = require("../controller/guestProfile.js")

const router = express.Router();

// POST /api/guest-profile
router.post('/', createGuestProfile);
router.get('/guest-profile/:email', getGuestProfile);

module.exports = router
