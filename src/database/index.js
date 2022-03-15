
const mongoose = require('mongoose');

// connect to mongo database
const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://event:event@cluster0.4aqp0.mongodb.net/test');
        console.log('connected to db')
      } catch (error) {
        console.log(error)
      }
}

module.exports = connectToDB