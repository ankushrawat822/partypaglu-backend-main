const Party = require('../model/Party.js');


const getAllParties = async (req, res) => {
    try {
      const parties = await Party.find();
      res.status(200).json(parties);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching parties', error });
    }
  };
  


// Get party by ID
const getPartyById = async (req, res) => {
  try {
    const party = await Party.findOne({ id: req.params.id });
    if (!party) {
      return res.status(404).json({ message: 'Party not found' });
    }
    res.json(party);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { getPartyById , getAllParties };
