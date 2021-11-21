const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
  const authorization = req.header('Authorization');

  if (!authorization) {
    const error = new Error('Unauthorized!');
    error.statusCode = 401;
    return next(error);
  }

  const token = authorization.replace('Bearer ', '');
  const { userId } = jwt.verify(token, process.env.SECRET);

  req.userId = { userId };

  next();
};