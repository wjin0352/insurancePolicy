const User = require('./user.model');
const Policy = require('../policy/policy.model');

const UserController = function() {}

UserController.prototype.getUsers = function(req, res) {
  return new Promise((resolve, reject) => {
    User.find({}, (error, users) => {
      if(error) {
        reject(error);
      } else {
        console.log(users);
        resolve(users);
      }
    });
  }).then((users) => {
    res.status(200).json(users);
  }).catch((err) => {
    console.log(err);
  });
}

UserController.prototype.createUser = function(req, res) {
  return new Promise((resolve, reject) => {
    const { firstName, age, gender, location, healthCondition } = req.body;
    User.create({
      firstName,
      age,
      gender,
      location,
      healthCondition
    }, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    })
  })
  .then((user) => {
    console.log('.then => ',user)
    const newPolicy = new Policy;
    newPolicy.policyCost = newPolicy.fiveYearsCost(user.age),
    newPolicy.eligibility = newPolicy.checkAge(user.age);
    newPolicy.policyType = "life insurance";
    newPolicy.policyHolder = user._id;
    
    newPolicy.eastCoastDiscount(user.location);
    newPolicy.healthConditionCost(user.healthCondition);
    newPolicy.genderDiscount(newPolicy.userGender);
    newPolicy.save()
      .then((newPolicy) => {
        user.policy.push(newPolicy);
        user.save()
          .then((user) => {
            const results = {
              user,
              newPolicy
            }
            console.log('RESULTS FROM CONTROLLER: ',results)
            res.status(200).json(results);
          })
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
      });
  });
}

module.exports = UserController.prototype;
