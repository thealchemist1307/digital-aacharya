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
  subject: {
    type: Array
  },
});

module.exports = Course = mongoose.model("Course", addClassSchema);
