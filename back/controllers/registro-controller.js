const bcrypt = require('bcrypt')
const { validate } = require('indicative/validator')
module.exports = { async store  (req,res) {
    
    validate(req.body,{
        name: 'required',
        email: 'required|email',
        password: 'required'
    })
    const {name,email,password} = req.body
    const { user } = req.db
   
    const hash  = await bcrypt.hash(password,10)
    const _user = await user.create({
        name, email, password:hash
    })
     _user.password = ''
        res.json(_user)
}
}