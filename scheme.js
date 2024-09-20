const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
   
    tittle:String,
    description:String,
    color:String
  });

  const note = mongoose.model('note', noteSchema);

  module.exports=note