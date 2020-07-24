const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const addClassSchema = new Schema({
  id:{
    type:Number,
    unique:true
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  status: {
    type: String
  },
  subject: {
    type: String
  },
  fees: {
    type: String
  },
  classtime: {
    type: String
  }
});

module.exports = Post = mongoose.model("addClass", addClassSchema);
