const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  platformProfiles: {
    leetcode: { type: String },
    codeforces: { type: String },
    github: { type: String },
  },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
