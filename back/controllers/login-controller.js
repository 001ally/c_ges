require("dotenv").config();
const { validate } = require('indicative/validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//const { json } = require('sequelize/types')

module.exports = {

	async login(req, res, next) {
		const { iduser } = req.db
		const { user } = req.db
		const { email, password } = req.body

		const _user = await user.findOne({
			where: { email },
			attributes: [
				"iduser",
				"name",
				"email",
				"password"
			]
		})
		if (!_user) {
			return res.status(404).json({ message: 'usuario não encontrado' })
		}
		
		bcrypt.compare(password, _user.password)
			.then((match) => {
				if (match) {
					const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'
					const data = { id: _user.iduser }
					delete _user.password
					_user.password = ''

					const authToken = jwt.sign(data, secret)

					return res.send({
						user: _user,
						token: authToken,
						
					})
					
				} else {
					return res.status(401).json({ erro: 'invalid user or password' })
				
				} 

			});
	}
}