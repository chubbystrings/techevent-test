// Validate user input for creating event
exports.validateEvent = (req, res, next) => {
  const { title, description, date, category, address } = req.body;

  if (!title || !description || !date || !category || !address) {
      return res.status(400).send({
        status: 'error',
        data: {},
        error: 'One or More fields are missing'
      })
  }

  next()
};
