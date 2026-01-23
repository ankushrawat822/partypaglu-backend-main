import express from 'express';
const router = express.Router();
import { getPartyById , getAllParties } from '../controller/Party.js';

router.get('/party-details/:id', getPartyById);
router.get('/party-details', getAllParties);

export default router;
