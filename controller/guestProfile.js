// controllers/guestProfile-controller.js

const GuestProfile = require("../model/guestProfile.js")

const createGuestProfile = async (req, res) => {
  try {
    const filter = { email: req.body.email };
    const update = req.body;
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const profile = await GuestProfile.findOneAndUpdate(filter, update, options);
    res.status(200).json({ message: 'Guest profile saved/updated', profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save guest profile' });
  }
};



const getGuestProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const profile = await GuestProfile.findOne({ email });

    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    res.status(200).json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching profile' });
  }
};

module.exports = {
  createGuestProfile,
  getGuestProfile,
};


