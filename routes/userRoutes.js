const express = require("express");
const userRouter = express.Router();
const {getUsers, addUsers, updateUsers} = require("../controlers/userController")

userRouter.get("/",getUsers);
userRouter.post("/",addUsers);
userRouter.put("/",updateUsers);

module.exports = {userRouter}

