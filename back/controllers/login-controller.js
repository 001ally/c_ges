module.exports = { async login  (req,res) {
    const { user } = req.db
    const {email,password} = req.body
    const users = await user.findOne({
        where:{email, password},
        attributes: [
            "iduser",
            "name",
            "email",
            "password"
        ]

    })
    if (!users) {
        return res.status(401).json({ Error: 'Login inváido' })
    }
        res.json(users)
}
}