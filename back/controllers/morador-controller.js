const router = require('express').Router()

module.exports = (  function () {
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
	async function createMorador(req,res) {
		const {
			nome,
			email,
			numerofixo
	} = req.body
	const { apartamento } = req.db
	const apartamentos = await apartamento.create({
			andar, numero, edificio_idedificio, numerofixo
	})
	res.json(apartamentos)
	}


router.get('/', getMorador)
router.post('/', createMorador)
return router
})()