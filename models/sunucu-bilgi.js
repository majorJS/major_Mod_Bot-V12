const mongoose = require("mongoose")

const ewing_sunucu = new mongoose.Schema({
   guild: String,
   ihlal: Number
})

module.exports = mongoose.model("ewing_sunucu", ewing_sunucu)