const jsonwebtoken = require ('jsonwebtoken');
const environment = require ('../config/environment.js');

const { SECRET } = environment;

function generateToken(user) {
	const { _id, email } = user;
	return jsonwebtoken.sign({ id: _id, email }, SECRET, {
		expiresIn: "15m",
	});
}

function verifyToken(token) {
	return jsonwebtoken.verify(token, SECRET);
}

module.exports = generateToken, verifyToken