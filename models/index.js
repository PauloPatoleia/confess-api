var mongoose = require("mongoose");
mongoose.set('debug', true);


mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost/confess-api', { useNewUrlParser: true } )

mongoose.Promise = Promise;

module.exports.Post = require("./post")