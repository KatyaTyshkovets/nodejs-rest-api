const {requestError} = require ('../../helpers');
const {Contact} = require('../../models/contact');


const removeContact = async (req, res) => {
    
      const {contactId} = req.params;
      const result = await Contact.findByIdAndDelete(contactId);
      if(!result) {
        throw requestError(404, `Contact with id ${contactId} not found`)
      }
      res.status(200).json({
        message: "contact deleted",
      });
    }

  module.exports = removeContact;