const { validate } = require('indicative/validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
	async login(req, res) {
	
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
		if (!_user ) {
			return res.status(404).json({message: 'usuario não encontrado'})
		}
		
		const pwd_hash =  bcrypt.compareSync(password, _user.password)
		console.log(password, _user.password,pwd_hash);
		if (!pwd_hash) {
			return res.status(401).json({erro: 'invalid user or password'})
			
		}
		else{
			return res.status(200).json({message: 'logado com sucesso'})
		}
	}

}