const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { User } = require("../../models/user");
const { nanoid } = require("nanoid");
const { RequestError, sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new RequestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const result = await User.create({
    name,
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Confirmation of registration on the website",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/:${verificationToken}">Click to confirm</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    name: result.name,
    email: result.email,
    avatarURL: result.avatarURL,
  });
};

module.exports = signup;
