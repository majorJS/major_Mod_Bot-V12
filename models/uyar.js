const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_uyarılar", new mongoose.Schema({
   user: String,
   uyarılar: Array,
}));