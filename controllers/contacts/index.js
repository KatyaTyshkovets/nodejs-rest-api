const listContacts = require('./listContacts');
const getContactById = require('./getById');
const add = require('./add');
const updateContact = require('./updateById');
const removeContact = require('./removeById');

module.exports = {
    listContacts,
    getContactById,
    add,
    updateContact,
    removeContact
}