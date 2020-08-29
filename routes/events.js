const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/")
  .get(controller.findAllEvents)


module.exports = router;