const {requestError} = require ('../../helpers');
const contacts = require('../../models/contacts');


const removeContact = async (req, res) => {
    
      const {contactId} = req.params;
      const result = await contacts.removeContact(contactId);
      if(!result) {
        throw requestError(404, `Contact with id ${contactId} not found`)
      }
      res.status(200).json({
        message: "contact deleted",
      });
    }

  module.exports = removeContact;