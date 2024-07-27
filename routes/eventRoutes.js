const express = require("express");
const eventRouter = express.Router();
const {getEvents, addEvents, updateEvents} = require("../controlers/eventController")

eventRouter.get("/",getEvents);
eventRouter.post("/",addEvents);
eventRouter.put("/",updateEvents);

module.exports = {eventRouter}