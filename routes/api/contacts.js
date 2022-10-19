const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
 const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

 router.post("/", validation(schemas.addSchema), ctrlWrapper(ctrl.add));

 router.put(
   "/:contactId",
   isValidId,
   validation(schemas.addSchema),
   ctrlWrapper(ctrl.updateContact)
 );

 router.patch(
   "/:contactId/favorite",
   isValidId,
   validation(schemas.favoriteSchema),
   ctrlWrapper(ctrl.updateFavorite)
 );

 router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
