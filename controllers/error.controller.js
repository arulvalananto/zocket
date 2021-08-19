const _modifyErrorMessage = (message) => {
  if (/duplicate/gi.test(message.split(" ")[0])) {
    return "Already registered";
  }
  return message;
};

const globalErrorHandler = (err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 500;

  let stack;

  if (process.env.NODE_ENV === "development") {
    stack = err.stack;
  }
  let message = _modifyErrorMessage(err.message);

  res.status(err.statusCode).json({
    status: err.status,
    message,
    stack,
  });
};

module.exports = globalErrorHandler;
