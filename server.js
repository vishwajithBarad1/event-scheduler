const express = require("express");
const {PORT,mongooseUrl} = require("./constants/constant");

const app = express();

app.listen(PORT,()=>{
    console.log("your server is listining on port ",PORT);
})