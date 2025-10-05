const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// custom error handler middleware
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // when we throw an error manually we want to change the statuscode to 500. 500 error code -The server found your route, but something went wrong while executing it. ( Internal error )
  let message = err.message;

  // for invalid object ids in mongoDB
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404; // 404 error code The server is running, but the URL you requested does not exist
    message = 'Resource not found. Invalid: ' + err.path;
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack // if we are in production we dont want to show the stack trace
  });
};

export { notFound, errorHandler };
