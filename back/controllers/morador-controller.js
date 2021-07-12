const router = require('express').Router()

module.exports = (function () {
	async function getMorador(req, res) {
		const { apartamento } = req.db

		const { morador } = req.db

		const moradores = await morador.findAll({
			attributes: [
				"idmorador",
				"nome",
				"email",
				"contacto",
				"pagamentototal",
				"apartamento_idapartamentos"

			]
		})

		res.json(moradores)
	}
	async function createMorador(req, res) {
		const {
			nome,
			email,
			contacto,
			pagamentototal,
			apartamento_idapartamentos
		} = req.body
		const { morador } = req.db
		const moradores = await morador.create({
			nome,
			email,
			contacto,
			pagamentototal,
			apartamento_idapartamentos
		})
		res.json(moradores)
	}
	async function editMorador(req, res) {

		const {
			idmorador,
			nome,
			email,
			contacto,
			pagamentototal,
			apartamento_idapartamentos
		} = req.body
		const { morador } = req.db
		const moradores = await morador.findOne({
			where: { idmorador }
		})
		moradores.nome = nome,
		moradores.email = email,
		moradores.contacto = contacto,
		moradores.pagamentototal = pagamentototal,
		moradores.apartamento_idapartamentos = apartamento_idapartamentos
		
		await moradores.save()

		res.json(moradores)
	}


	router.get('/', getMorador)
	router.post('/', createMorador)
	router.put('/', editMorador)
	return router
})()