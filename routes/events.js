const router = require("express").Router();
const controller = require("../controllers/controller");

router.route("/")
  .get(controller.findAllEvents)

router.route('/api/users')
  .get(controller.addEvent)
module.exports = router;