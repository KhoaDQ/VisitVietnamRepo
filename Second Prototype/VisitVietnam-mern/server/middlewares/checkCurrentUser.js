const jwt = require('jsonwebtoken');

exports.checkCurrentUser = async (req, res, next) => {
	const authorization = req.header('Authorization');

	if (!authorization) {
		req.user = null;
		next();
	} else {
		const token = authorization.replace('Bearer ', '');
		try {
			const { userId } = jwt.verify(token, process.env.SECRET);
			req.user = { userId };
			next();
		}
		catch (err) {
			req.user = null;
			next();
		}
	}
};