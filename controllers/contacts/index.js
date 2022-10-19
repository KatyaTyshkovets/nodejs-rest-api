const listContacts = require("./listContacts");
const getContactById = require("./getById");
const add = require("./add");
const updateContact = require("./updateById");
const removeContact = require("./removeById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  listContacts,
  getContactById,
  add,
  updateContact,
  updateFavorite,
  removeContact,
};
