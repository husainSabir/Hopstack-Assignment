const mongoose = require('mongoose');
const subItemSchema = require('./Subitem')
const ItemSchema = new mongoose.Schema({
    label: {
      type:String
    },
    subItem:[subItemSchema]
}, { timestamps: true })

module.exports = mongoose.model("Item", ItemSchema);
