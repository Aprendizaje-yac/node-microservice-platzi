const httpStatus = require("http-status-codes");

exports.success = (req, res, message = "", status = httpStatus.OK) => {
  let statusCode = status || 200;

  res.status(statusCode).send({
    error: false,
    status: status,
    body: message
  });
};

exports.error = (req, res, message = "Internal server error", status = httpStatus.INTERNAL_SERVER_ERROR) => {
  let statusCode = status || 500;
  res.status(statusCode).send({
    error: true,
    status: status,
    body: message
  });
};