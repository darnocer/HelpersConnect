const router = require("express").Router();
const controller = require("../controllers/controller");

//API.js calls the route which takes to this file, which then points to the controller file
router.route("/")
  .get(controller.findAllEvents)

router.route('/api/events/:id')
  .put(controller.addEvent)

router.route('/api/events/:id')
  .delete(controller.deleteEvent)

router.route('/api/user/:userId')
  .get(controller.getUser)
module.exports = router;
