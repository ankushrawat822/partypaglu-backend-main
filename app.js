import express from 'express'
const app = express()
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

// importing db 
import connectDB from './config/db.js'
connectDB()



// importing auth routes
import authRoute from "./route/auth-route.js"
import checkUser from "./route/auth-route.js"

// importing payment routes
import getPayment from "./route/payment.js"
import verify from "./route/payment.js"
import order from "./route/payment.js"

// importing guestProjile 
import createGuestProfile from "./route/guestProfile.js"
import getGuestProfile from "./route/guestProfile.js"

// importing party routes
import partyRoute from "./route/partyRoute.js"
import getAllParties from "./route/partyRoute.js"

app.use(cors())
app.use(express.json())

// roues 
app.use("/api" , authRoute)
app.use("/api" , getPayment)
app.use("/api" , verify)
app.use("/api" , order)
app.use("/api" , checkUser)

// guestProfile
app.use('/api/guest-profile', createGuestProfile);
app.use('/api', getGuestProfile);

// party routes
app.use("/api" , partyRoute)
app.use("/api" , getAllParties)


export default app



