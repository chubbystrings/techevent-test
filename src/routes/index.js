const express = require("express");
const router = express.Router();
const eventRoutes = require("./event");
const categoryRoutes = require('./category')


/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index", { title: "Tech Events Server is Live" });
});

router.use('/events', eventRoutes);
router.use('/category', categoryRoutes);



module.exports = router;
