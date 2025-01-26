const mongoose = require('mongoose');

const heatmapSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  platform: { type: String, required: true },
  activity: {
    type: Map,
    of: Number, // Key is a date string, value is submission count
    required: true,
  },
});

module.exports = mongoose.model('Heatmap', heatmapSchema);
