const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/").get(controller.findAllEvents);

router.route("/events/:id").put(controller.update);

module.exports = router;
