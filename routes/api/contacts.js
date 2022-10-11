const express = require('express');

const {validation,ctrlWrapper} = require ("../../middlewares");
const {addSchema} = require ("../../schemas");

const {contacts: ctrl} = require("../../controllers");

const validateMiddleware = validation(addSchema)

const router = express.Router();


router.get('/',ctrlWrapper(ctrl.listContacts))

router.get('/:contactId',ctrlWrapper(ctrl.getContactById));

router.post('/',validateMiddleware,ctrlWrapper(ctrl.add));

router.delete('/:id', ctrlWrapper(ctrl.removeContact))

router.put('/:contactId',validation(addSchema),ctrlWrapper(ctrl.updateContact));

module.exports = router;
