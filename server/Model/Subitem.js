const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    item_name:{
      type:String
    },
    nf_calories:{
      type:String
    }
}, { timestamps: true })

module.exports = ItemSchema;
