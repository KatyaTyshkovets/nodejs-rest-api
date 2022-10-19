const {Contact} = require('../../models/contact');


const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!result) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }

  if (!req.body) {
    return res.status(400).json({
      status: "error",
      code: 400,
      message: "missing field favorite",
    });
  }

  res.json({
    status: "success",
    code: 200,
    result,
  });
};


module.exports = updateFavorite;