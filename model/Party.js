const mongoose = require('mongoose');

const partySchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  location: {
    address: String,
    area: String,
    city: String,
  },
  dateTime: Date,
  time: String,
  coverCharge: Number,
  ageRange: {
    min: Number,
    max: Number,
  },
  attendeesCount: Number,
  expectedAttendees: String,
  genderRatio: String,
  imageUrl: String,
  category: String,
  isFillingFast: Boolean,
  priceIncludes: [String],
  about: String,
  whatToExpect: [
    {
      title: String,
      description: String,
    },
  ],
  offerings: [
    {
      title: String,
      description: String,
    },
  ],
  thingsToKnow: [String],
  etiquette: [String],
  amenities: {
    beveragesServed: String,
    byob: Boolean,
    smokingAllowed: Boolean,
    petsAtHome: Boolean,
    guestPetsAllowed: Boolean,
    guestKidsAllowed: Boolean,
    footwearInside: Boolean,
    elevator: Boolean,
    ac: Boolean,
    parking: Boolean,
    music: Boolean,
  },
  rules: [String],
  howItWorks: [String],
  cancellationPolicy: [String],
});

module.exports = mongoose.model('Party', partySchema);
