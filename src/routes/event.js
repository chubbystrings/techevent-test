const express = require("express");
const router = express.Router();
const eventController = require('../controller/event');
const eventValidation = require('../middleware/validations')

// routes for events

router.get("/",  eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post("/", eventValidation.validateEvent, eventController.addEvent);

module.exports = router;