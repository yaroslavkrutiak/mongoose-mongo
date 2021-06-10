const mongoose = require('mongoose');

const dev_db_url = 'mongodb+srv://user:userpass@cluster0.mxhim.mongodb.net/tc';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
mongoose.connect(mongoDB, dbOptions).catch(e=>console.log(e));
mongoose.Promise = global.Promise;

module.exports.db = mongoose.connection;