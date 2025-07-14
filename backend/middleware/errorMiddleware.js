function errorHandler(err, req, res, next) {
  res.status(500).json({ message: err.message || 'Server is having some Error.Kindly do fix it' });
}

module.exports = errorHandler;
