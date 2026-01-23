// routes/guestProfile.js
import express from "express";
//import { ReturnDocument } from 'mongodb';
//import { createGuestProfile } from '../controllers/guestProfile.js';
import { createGuestProfile, getGuestProfile } from "../controller/guestProfile.js";

const router = express.Router();

// POST /api/guest-profile
router.post('/', createGuestProfile);
router.get('/guest-profile/:email', getGuestProfile);

export default router;
