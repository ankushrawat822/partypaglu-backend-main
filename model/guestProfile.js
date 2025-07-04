// models/guestProfile.js

const mongoose = require("mongoose")

const guestProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  profilePic: { type: String },
  gender: { type: String, enum: ['male', 'female', 'transgender'], required: true },
  interests: [String],
  city: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('GuestProfile', guestProfileSchema);

