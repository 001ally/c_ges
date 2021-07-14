//const router = require("../routes/api")
const router = require('express').Router()
module.exports = (function () {
	async function apart(req, res) {
		const { apartamento } = req.db
		const { proprietario, andar, numero, idedificio, numerofixo, } = req.body
		const apartamentos = await apartamento.findAll({
			attributes: [
				"idapartamentos",
				"proprietario",
				"andar",
				"numero",
				"edificio_idedificio",
				"numerofixo"
			]
		})

		res.json(apartamentos)
	}

	async function getAptByIdEdificio(req, res, params) {

		const { id } = req.params;
		const { apartamento } = req.db
		const { proprietario, andar, numero, idedificio, numerofixo, } = req.body
		const apartamentos = await apartamento.findAll({
			where: { edificio_idedificio: id },
			attributes: [

				"idapartamentos",
				"proprietario",
				"andar",
				"numero",
				"edificio_idedificio",
				"numerofixo"
			]
		})

		res.json(apartamentos)
	}
	async function createApart(req, res) {

		const {
			proprietario,
			andar,
			numero,
			edificio_idedificio,
			numerofixo
		} = req.body
		const { apartamento } = req.db
		const apartamentos = await apartamento.create({
			proprietario, andar, numero, edificio_idedificio, numerofixo
		})
		res.json(apartamentos)
	}

	async function editApart(req, res) {

		const {
			idapartamentos,
			proprietario,
			andar,
			numero,
			edificio_idedificio,
			numerofixo
		} = req.body
		const { apartamento } = req.db
		const apartamentos = await apartamento.findOne({
			where: { idapartamentos }
		})
		apartamentos.proprietario = proprietario
		apartamentos.andar = andar,
			apartamentos.numero = numero,
			apartamentos.edificio_idedificio = edificio_idedificio,
			apartamentos.numerofixo = numerofixo
		await apartamentos.save()

		res.json(apartamentos)
	}
	async function apagarApart(req, res) {
		const { id } = req.params
		const { apartamento } = req.db

		const apartamentos = await apartamento.destroy({
			where: { idapartamentos: id }
		})

		res.json(apartamentos)
	}

	router.get('/', apart)
	router.get('/:id', getAptByIdEdificio)
	router.post('/', createApart)
	router.put('/', editApart)
	router.delete('/:id', apagarApart)
	return router

})()




