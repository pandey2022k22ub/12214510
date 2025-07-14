
let logs = [];

function logger(req, res, next) {
  const entry = {
    method: req.method,
    path: req.originalUrl,
    time: new Date().toISOString()
  };

  logs.push(entry);
  next();
}

module.exports = logger;
