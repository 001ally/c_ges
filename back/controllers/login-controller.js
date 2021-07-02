const { validate } = require('indicative/validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports = {
    async login(req, res) {
        //   validate(req.body, {
        //     email: 'required|email',
        //     password: 'required'
        // }).then((value) => {
        const { user } = req.db
        const { email, password } = req.body
        const users = await user.findOne({
            where: { email },
            attributes: [
                "iduser",
                "name",
                "email",
                "password"
            ]
        })
        const pwd_hash = await bcrypt.hash(password, 10) 
        bcrypt.compare(pwd_hash, users.pwd_hash)
            .then((match) => {
                if (match) {
                    const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'
                    const data = { id: users.iduser }

                    delete users.password

                    const authToken = jwt.sign(data, secret)

                    res.send({
                        user: users,
                        token: authToken
                    })
                } else {
                    res.status(400).send('Cannot find any account that matches the given username and password')
                }

            })
        .catch((error) => res.status(400).send(error))

    }

}