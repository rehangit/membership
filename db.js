const mongoose = require('mongoose');

mongoose.set('debug', true);
module.exports = async () => {
  console.log({ connection: mongoose.connection, mongoUrl: process.env.MONGO_URL});
  return mongoose.connect(process.env.MONGO_URL)
      .then(() => mongoose.connection)
      .catch(err => console.log({err}));
}
