const mongoose = require("mongoose");

module.exports = mongoose.model("ewing_yasaklıtag", new mongoose.Schema({
  guild: String,
  taglar: Array
}));