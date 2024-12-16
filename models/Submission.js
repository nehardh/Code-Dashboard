const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  submissionDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Accepted', 'Wrong Answer', 'Runtime Error', 'Compilation Error'], required: true },
  language: { type: String },
  code: { type: String },
});

module.exports = mongoose.model('Submission', submissionSchema);
