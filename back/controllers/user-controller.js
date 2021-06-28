module.exports = { async index  (req,res) {
    const { user } = req.db
    const users = await user.findAll({
        attributes: [
            "iduser",
            "name",
            "email",
            "password"
        ]
    })
        res.json(users)
}
}