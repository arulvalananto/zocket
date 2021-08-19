const sgMail = require("@sendgrid/mail");
const AppError = require("./AppError");
const registered = require("./Templates/registered");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options, res, next) => {
  const msg = {
    to: options.email, // Change to your recipient
    from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
    subject: options.subject,
    html: registered(options.email.split("@")[0]),
  };
  sgMail.send(msg, (err, result) => {
    if (err) {
      return next(new AppError(err.message, 404));
    } else {
      console.log("Email sent");
    }
  });
};

module.exports = sendEmail;
