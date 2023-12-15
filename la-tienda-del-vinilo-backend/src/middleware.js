const userModel = require('./models/userModel.js');
const jwtToken = require('./utils/jwt.js')

exports.authRequired = async(req, res, next) => {
	const authorizationHeader =
		req.headers.authorization || req.headers.Authorization;

	try {
		const token = authorizationHeader.split(" ")[1];

		if (!token) {
			throw new Error("sin token");
		}

		const { id } = jwtToken.verifyToken(token);

		req.id = id;

		return next();
	} catch (error) {
		return res
			.status(403)
			.send({ error: "no tienes los permisos (falta token o esta expirado)" });
	}
}

exports.hasRole = async(role) => {
	return async function (req, res, next) {
		const { roles } = await userModel.findById(req.id).exec();
		if (roles.includes(role)) {
			return next();
		}

		return res
			.status(401)
			.send({ error: `Usuario no tiene el rol de ${role}` });
	};
}
exports.hasAnyRole = async(rolesToCheck) => {
	return async function (req, res, next) {
		const { roles } = await userModel.findById(req.id).exec();
		if (rolesToCheck.some((role) => roles.includes(role))) {
			return next();	
		}

		return res.status(401).send({
			error: `Usuario no tiene ninguno de estos roles: [${rolesToCheck.join(
				" - "
			)}]`,
		});
	};
}