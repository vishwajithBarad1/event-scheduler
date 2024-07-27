const express = require('express');
const router = express.Router();

const {userRouter} = require('./userRoutes');
const {eventRouter} = require('./eventRoutes');

router.use('/users', userRouter);
router.use("/events", eventRouter);

module.exports = router;