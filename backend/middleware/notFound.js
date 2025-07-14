function notFound(req, res, next) {
  res.status(404).json({ message: 'Route had not been found' });
}

module.exports = notFound;
