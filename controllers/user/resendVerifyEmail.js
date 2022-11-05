const { User } = require("../../models/user");

const { RequestError } = require("../../helpers/RequestError");
const { sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not found");
  }
  if (user.verify) {
    throw RequestError(400, "Verification has already been passed.");
  }
  const mail = {
    to: email,
    subject: "Confirmation of registration on the website",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/:${user.verificationToken}">Click to confirm</a>`,
  };
  await sendEmail(mail);
  res.json({
    status: "succes",
    code: 200,
    message: "Verification email sent.",
  });
};

module.exports = resendVerifyEmail;
