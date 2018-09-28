var mongoose = require("mongoose");
mongoose.set('debug', true);


mongoose.connect('mongodb://localhost/confess-api', { useNewUrlParser: true } )

mongoose.Promise = Promise;

module.exports.Post = require("./post")