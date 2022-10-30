const express = require("express");
const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { userSchemas } = require("../../models/user");
const ctrl = require("../../controllers/auth");
const router = express.Router();

router.post(
  "/register",
  validation(userSchemas.userJoiSchema),
  ctrlWrapper(ctrl.signup)
);
router.post(
  "/login",
  validation(userSchemas.loginShema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
