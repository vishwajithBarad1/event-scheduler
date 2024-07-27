const mongoose = require("mongoose");
const { mongooseUrl } = require("../constants/constant");

mongoose.connect(mongooseUrl);
mongoose.connection.on("connected",()=>{console.log("mongoose has connected successfully")});

module.exports = {mongoose};