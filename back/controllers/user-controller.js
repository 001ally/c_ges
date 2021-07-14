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
	async function byId(req, res) {

		const { user } = req.db
		const { edificio } = req.db
		const { userId } = req.params;
		console.log(userId);

		const users = await user.findAll({
			where: { iduser: userId },
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
			users.password = password,

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
	router.get('/:userId', byId)
	router.post('/', create)
	router.put('/', edit)
	//router.put('/:id', editById)
	router.delete('/:id', delet)
	return router
})()