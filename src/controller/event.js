const { query } = require("express");
const EventModel = require("../models/event");

//format search term to regex format
const escapeRegex = (text) => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

// get all events with search, sort and filter functionality
exports.getEvents = async (req, res) => {
  try {
    const searchArr = ["title", "category"];
    if (req.query) {

      // filter and search algo
      let searchQuery = {};
      searchArr.forEach((field) => {
        if (req.query[field]) {
          const cat = req.query[field];
          const regex = new RegExp(escapeRegex(cat), "gi");
          req.query = { ...req.query };
          searchQuery = { [field]: regex };
        }
      });

      // sorting algo
      if (req.query.sort && (req.query.sort === 'asc' || req.query.sort === 'desc')) {
        const sorting = req.query.sort === 'asc' ? 1 : -1
        const data = await EventModel.find(searchQuery).sort({ date: sorting})
        return res.status(200).send({
          status: "success",
          data,
        });
      }

      const data = await EventModel.find(searchQuery).sort({ date: 1})
        return res.status(200).send({
          status: "success",
          data,
        });

    }

    const data = await EventModel.find({}).sort({ date: 1});
    return res.status(200).send({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      data: {},
      error,
    });
  }
};

// add an event

exports.addEvent = async (req, res) => {
  try {
    const event = new EventModel({
      ...req.body,
    });
    const data = await event.save()
    return res.status(200).send({
      status: "success",
      data
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      data: {},
      error,
    });
  }
};

// find an event by Id

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        status: "error",
        data: {},
        error: "event id missing",
      });
    }

    const data = await EventModel.findById(id);
    if (!data) {
      return res.status(404).send({
        status: "error",
        data: {},
        error: "event not found",
      });
    }

    return res.status(200).send({
      status: "success",
      data,
    });
  } catch (error) {
    return res.status(404).send({
      status: "error",
      data: {},
      error,
    });
  }
};
