const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_extraMute", new mongoose.Schema({
    user: String, 
    array: Array
}));