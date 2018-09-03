const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect('mongodb://seph:qwe123@ds141812.mlab.com:41812/pusherpolldb')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));