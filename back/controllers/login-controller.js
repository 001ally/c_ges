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
              if (match) {
                const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'
                const data = { id: _user.id }

                delete _user.password

                const authToken = jwt.sign(data, secret)

                return res.send({
                    user: _user,
                    token: authToken
                })
              } else {
                return res.status(401).json({erro: 'invalid user or password'})      
              }
            
		});
	}
}