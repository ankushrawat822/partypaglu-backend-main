import { getPayment, razorpay_order, razorpay_verify } from "../controller/payment.js";
// import express from 'express'
import express from "express";

const router = express.Router()

router.get("/get-payment" , getPayment  )

router.post("/order" , razorpay_order)

router.post("/verify" , razorpay_verify)


export default router;