const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
  customerId: String,
  created: String,
  status: { type: String, enum: ['active', 'disabled'], default: 'active' },
  expiryDate: String,
  saleConfirmed: String,
  policyNumber: String,
  purchaseOpportunityId: String,
  purchaseOpportunityType: String,
  reason: String,

});

module.exports = mongoose.model('Membership', MembershipSchema);
