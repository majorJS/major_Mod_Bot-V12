const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_isimler", new mongoose.Schema({
    user: String, 
    isimler: Array
}));