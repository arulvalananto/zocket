const db = require("../database");
const AppError = require("../utils/AppError");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

const _validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email.toLowerCase());
};

exports.getUserInfo = (req, res, next) => {
  const { id } = req.params;

  let sql = `SELECT * from users where id = ?`;
  db.execute(sql, [id], (err, result) => {
    if (err) return next(new AppError("Something went wrong", 404));
    if (!result) return next(new AppError("Invalid id", 401));
    res.status(201).json(result[0]);
  });
};

exports.registerEmail = (req, res, next) => {
  const { email } = req.body;

  if (!_validateEmail(email)) {
    return next(new AppError("Please enter valid email address"));
  }

  const id = crypto.randomBytes(16).toString("hex");

  let sql = `INSERT INTO users (id, email) VALUES (?, ?)`;
  db.execute(sql, [id, email], (err, result) => {
    if (err) return next(new AppError(err.message, 404));

    sendEmail(
      {
        subject: "It's almost ready for you",
        email,
      },
      res,
      next
    );

    db.execute(
      "SELECT id from users where email = ?",
      [email],
      (err, result) => {
        console.log(result[0].id);
        res
          .status(201)
          .json({ message: "Registered Successfully", id: result[0].id });
      }
    );
  });
};
