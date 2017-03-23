const mainRouter = require('../api/main/main.router');
const userRouter = require('../api/user/user.router');
const policyRouter = require('../api/policy/policy.router');

module.exports = function(app) {
  app.use('/', mainRouter);
  app.use('/api', userRouter);
  app.use('/api', policyRouter);
}
