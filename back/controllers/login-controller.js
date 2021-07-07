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

		console.log(_user)
		console.log(password)
		console.log(await bcrypt.hash(password,10))
		bcrypt.compare(password, _user.password)
		  .then((match) => {
			  console.log('match' + match)



			});

		const pwd_hash =  bcrypt.compareSync(password, _user.password)

		if (!pwd_hash) {
			return res.status(401).json({erro: 'invalid user or password'})
			
		}
		else{
			return res.status(200).json({message: 'logado com sucesso'})
		}
	}

}