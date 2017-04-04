const mongoose = require('mongoose');
const Policy = require('../policy/policy.model');

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
  policy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Policy' }],
  created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema);
