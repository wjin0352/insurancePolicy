const mongoose = require('mongoose');
const config = require('./variables.express');

// add promises to model objects, so you can work with promises on model instance.
mongoose.Promise = global.Promise;

// setup initial connection to local dev mongo database
mongoose.connect(config.MONGODB.URI, (err, database) => {
  if (err) {
    console.log('error connecting to database...ERROR:', err);
    process.exit(1);
  }
});

// exports.MONGOLAB_URI = process.env.MONGOLAB_URI || global.MONGOLAB_URI || (process.env.NODE_ENV === 'production' ?)

// connect to production database
// mongoose.connect(config.MONGOLAB_URI, (err, databse) => {
//   if (err) {
//     console.log('Error connecting to database: ', err);
//     process.exit(1);
//   }
// });

// we have a pending connection to the database running on local, we need to be notified if we connected successfully or if a error occurs:
const db = mongoose.connection
  .on('error', console.error.bind(console, 'connection error'))
  .once('open', () => {
    console.log('Connected to mongodb');
});
