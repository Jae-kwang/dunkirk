const mongoose = require('mongoose');
const { Schema } = mongoose;

const CrawlItemSchema = new Schema({
  title: String,
  theater: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  endDate: Date
});

module.exports = mongoose.model('CrawlItem', CrawlItemSchema);
