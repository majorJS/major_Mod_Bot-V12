const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_notlar", new mongoose.Schema({
    user: { type: String }, 
    notlar: {type: Array }
}));