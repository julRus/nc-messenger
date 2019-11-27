const usersRouter = require("express").Router();
const { getUsers } = require("../controllers/users");

usersRouter.route("/").get(getUsers);

// usersRouter
//   .route("/:username")
//   .get(getUserById)
//   .all(error405);

module.exports = { usersRouter };
