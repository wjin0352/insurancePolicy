const mongoose = require('mongoose');
const User = require('../user/user.model');

const BASE_POLICY_COST = 100;
const MINIMUM_AGE = 18;

const policySchema = mongoose.Schema({
  base_policy_cost: { type: Number, default: BASE_POLICY_COST },
  eligibility: { type: Boolean, default: false },
  policyCost: { type: Number, default: 0 },
  policyType: { type: String, default: "life insurance" },
  policyHolder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  created: { type: Date, default: Date.now }
})

policySchema.methods.checkAge = function(age) {
  // Insurance only available for over 18 yrs old
  return (age >= MINIMUM_AGE) ? this.eligibility = true : this.eligibility = false;
}

policySchema.methods.fiveYearsCost = function(age) {
  // every 5 years over 18 years old price increase $20
  this.policyCost = BASE_POLICY_COST
  if (age >= (MINIMUM_AGE + 5)) {
    return this.policyCost += ((parseInt((age-MINIMUM_AGE)/5)) * 20);
  }
  return this.policyCost;
}

policySchema.methods.genderDiscount = function(gender) {
  // Females live longer so $12 discount on FINAL PRICE!
  if (gender === "female") {
      this.policyCost -= 12;
      return this.policyCost;
  }
  return this.policyCost;
}

policySchema.methods.eastCoastDiscount = function(location) {
  // If you live on East Coast of America cost lowered by 5%
  switch(location.toLowerCase()) {
    case "boston":
      return this.policyCost -= BASE_POLICY_COST * .05;
    case "new york":
      return this.policyCost -= BASE_POLICY_COST * .05;
    default:
      return this.policyCost;
  }
}

policySchema.methods.healthConditionCost = function(condition) {
  switch(condition) {
    case 'allergies':
      return this.policyCost += BASE_POLICY_COST * .01;
    case 'sleep apnea':
      return this.policyCost += BASE_POLICY_COST * .06;
    case 'heart disease':
      return this.policyCost += BASE_POLICY_COST * .17;
    case 'high cholesterol':
      return this.policyCost += BASE_POLICY_COST * .08;
    case 'asthma':
      return this.policyCost += BASE_POLICY_COST * .04;
    default:
      return this.policyCost;
  };
}

module.exports = mongoose.model('Policy', policySchema);
