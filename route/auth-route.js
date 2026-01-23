import express from "express";
import { createUser, checkUser } from "../controller/auth-controller.js";
const router = express.Router()

router.post('/save-user-mongodb' , createUser)

router.post('/check-user', checkUser)

export default router;