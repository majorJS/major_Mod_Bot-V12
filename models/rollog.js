const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_rollog", new mongoose.Schema({
    user: String, 
    roller: Array
}));
