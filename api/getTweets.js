const connectToDatabase = require('../lib/database');
const Tweet = require('../models/Tweet');
const moment = require('moment')

module.exports = async (req, res) => {
  try {
    await connectToDatabase();

    let tweets = await Tweet.find({});
     
    return res.status(200).json({ tweets })
  } catch (error) {
    console.log(error)

    return res.status(500).json({ status: 'ERROR. Could not get tweets', error: true })
  }
}