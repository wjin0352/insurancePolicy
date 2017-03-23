clean template for react redux project complete with basic server code with mongodb backend.

To Start just run:
>npm install
>npm start

Pricing Engine for PolicyGenius Insurance

Conditions:
  const BASE_COST = 100;
  Insurance only available for over 18 yrs old
  every 5 years over 18 price increase $20
  If you live on East Coast of America cost lowered by 5%

  Health conditions
    allergies 1% increase
    sleep apnea 6%
    heart disease 17%
    high cholesterol 8%
    asthma 4%

  Females live longer so $12 discount on final price


MODELS

  User(firstName, age, gender, location, healthCondition)
    this.firstName = firstName
    this.age = age
    this.gender = gender
    this.location = location
    this.healthCondition = healthCondition


  Policy(type, user)
    const BASE_COST = $100


    this.type = type // type will be life Insurance
    this.policyHolder = user

    Policy.prototype.check
