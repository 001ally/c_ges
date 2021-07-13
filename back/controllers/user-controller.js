const router = require('express').Router()

module.exports = (function() {
	async function index(req, res) {
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

	async function create(req, res) {
    const {
			iduser,
			name,
			email,
			password
    } = req.body
    const { user } = req.db
    const users = await user.create({
			iduser,
			name,
			email,
			password
    })
    res.json(users)
  }
	async function edit (req, res) {
    const {
			iduser,
			name,
			email,
			password
    } = req.body

		const { user } = req.db
		const users = await user.findOne({
			where: { iduser }
		})
    users.name = name,
    users.email = email,
    users.email =	email,

		await users.save()
		res.json(users)
	}
	async function delet(req, res) {
		const { id } = req.params
		const { user } = req.db

		const users = await user.destroy({
			where: { iduser: id }
		})

		res.json(users)
	}
	router.get('/', index)
	router.post('/', create)
	router.put('/', edit)
	router.delete('/:id', delet)
	return router
})()