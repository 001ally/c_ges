const jwt = require('jsonwebtoken')
const router = require('express').Router()

module.exports = (function () {


	async function byId(req, res) {
		let result = []
		const { edificio } = req.db
		const { apartamento } = req.db
		const { user } = req.db
		const { userId } = req.params;
		console.log(userId);

		const edificios = await edificio.findAll({
			where: { user_iduser: userId },
			attributes: [
				"idedificio",
				"nome",
				"fotografia",
				"user_iduser"]
		})

		res.json(edificios)
	}
	async function show(req, res) {

		const { edificio } = req.db
		const edificios = await edificio.findAll({
			attributes: [
				"idedificio",
				"nome",
				"fotografia",
				"user_iduser",
				"localizacao"
			]
		})

		res.json(edificios)
	}

	async function create(req, res) {
		const {
			nome,
			fotografia,
			user_iduser,
			localizacao
		} = req.body
		const { edificio } = req.db
		const { authorization } = req.headers

		const token = authorization.split(" ")[1]
		if (!token) {
			return res.status(401).json({
				error: 'not authorization'
			})
		}
		try {

			const secret = 'B18fbWIyeU1utFA31mzGaVyzjyL9ZnfP'
			const payload = jwt.verify(token, secret)
			console.log(payload)
			const edificios = await edificio.create({
				nome, fotografia, user_iduser: payload.id, localizacao
			})

			res.json(edificios)
		} catch (error) {
			console.log(error)
		}
	}
	async function update(req, res) {
		const {
			idedificio,
			nome,
			fotografia,
			user_iduser,
			localizacao
		} = req.body
		const { edificio } = req.db

		const edificios = await edificio.findOne({
			where: { idedificio }
		})
		edificios.nome = nome
		edificios.fotografia = fotografia
		edificios.user_iduser = user_iduser
		edificios.localizacao = localizacao
		await edificios.save()
		res.json(edificios)
	}

	async function destroy(req, res) {
		const { id } = req.params
		const { edificio } = req.db

		const edificios = await edificio.destroy({
			where: { idedificio: id }
		})

		res.json(edificios)
	}

	router.get('/:userId', byId)
	router.post('/', create)
	router.put('/', update)
	router.delete('/:id', destroy)
	return router
})()