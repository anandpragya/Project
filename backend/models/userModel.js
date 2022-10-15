const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      name: {type: String, require},
      email: {type: String, require},
      password: {type: String, require},
    },
    {
      timestamps: true, //add date
    }
  );
  
  const userModel = mongoose.model('users', userSchema);
  module.exports = userModel;