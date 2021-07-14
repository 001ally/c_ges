const bcrypt = require('bcrypt')

module.exports = { async store  (req,res) {

    
    const {name,email,password} = req.body
    const { user } = req.db
   // console.log(process.env.BCRYPT_SALT);
    const hash  = await bcrypt.hash(password,10)
    const _user = await user.create({
        name, email, password:hash
    })
		
     _user.password = ''
        res.json(_user)
}
}