const User = require('../models/user');

//GET ALL
exports.getAllPlayers = (req, res, next) => {
	// const currentPage = req.query.page || 1;
	// const perPage = 2;
	let totalItems;
	User.find()
		.countDocuments()
		.then(count => {
			totalItems = count;
			return User.find()
			// .skip((currentPage - 1) * perPage)
			// .limit(perPage);
		})
		.then(users => {
			res.status(200).json({
				message: 'Players posts successfully.',
				users: users,
				totalItems: totalItems
			});
		})
		.catch(err => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
};