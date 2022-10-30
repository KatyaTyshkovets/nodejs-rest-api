const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new RequestError(404, `Contact with id ${contactId} not found`);
  }
  res.status(200).json(result);
};

module.exports = getContactById;
