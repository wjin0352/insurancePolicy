const assert = require('assert');
const User = require('../server/api/user/user.model');
const Policy = require('../server/api/policy/policy.model');

describe('Creating users with insurance polices', () => {
  it('saves a user', (done) => {
    const user = new User({
      firstName: "user",
      age: 22,
      gender: "female",
      location: "New Jersey",
      healthCondition: "none",
    });

    user.save()
      .then(() => {
        assert(!user.isNew);
        done();
      })
      .catch((err) => {
        console.log('error occured: ', err);
      });
  });

  it('saves a policy for a user', (done) => {
    const user = new User({
      firstName: "Kelly",
      age: 50,
      gender: "female",
      location: "boston",
      healthCondition: "allergies",
    });

    const newPolicy = new Policy()
    newPolicy.policyHolder = user._id;
    newPolicy.eligibility = newPolicy.checkAge(user.age)
    newPolicy.policyCost = newPolicy.fiveYearsCost(user.age);
    newPolicy.policyCost = newPolicy.eastCoastDiscount(user.location);
    newPolicy.policyCost = newPolicy.healthConditionCost(user.healthCondition);
    newPolicy.policyCost = newPolicy.genderDiscount(user.gender);
    newPolicy.policyCost = newPolicy.healthConditionCost("heart disease");

    user.policy.push(newPolicy._id)
    user.save()
      .then(() => {
      })
      .catch((err) => {
        console.log('USER SAVE ERROR OCCURED: ', err)
      })
    newPolicy.save()
      .then(() => {
        assert(!newPolicy.isNew);
        assert(user.policy[0].toString() === newPolicy._id.toString());
        // assert(user.policy)
        var kelly = User.find({})
        console.log(kelly)
        
        done();
      })
      .catch((err) => {
        console.log('POLICY SAVE ERROR OCCURED: ', err)
      })
  });
});
