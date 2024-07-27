const express = require("express");
const {PORT} = require("./constants/constant");
const routes = require("./routes/index");
const app = express();

app.use(express.json())
app.use("/api",routes)

app.listen(PORT,()=>{
    console.log("your server is listining on port ",PORT);
})
