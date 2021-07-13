const { Sequelize } = require('../models/index');
const db = require('../models/index');
const { index } = require('./user-controller');

const router = require('express').Router()

module.exports = (function () {
	async function index(req, res) {
		const { despesa } = req.db
		const { edificioId } = req.params;

		const despesas = await despesa.findAll({
			//where: { edificio_idedificio: edificioId },
			attributes: [
				"iddespesa",
				"tipodespesa",
				"descricao",
				"data",
				"edificio_idedificio",
				"valor"
			]
		})
		res.json(despesas)
	}
	async function despesa(req, res, params) {
		const { despesa } = req.db
		const { edificioId } = req.params;

		console.log(req.params);
		console.log(edificioId);
		const despesas = await despesa.findAll({
			where: { edificio_idedificio: edificioId },
			attributes: [
				"iddespesa",
				"tipodespesa",
				"descricao",
				"data",
				"edificio_idedificio",
				"valor"
			]
		})
		res.json(despesas)
	}
	async function createExpense(req, res, params) {

		const {
			tipodespesa,
			descricao,
			data,
			edificio_idedificio,
			valor
		} = req.body;

		console.log(edificio_idedificio);
		const { despesa } = req.db

		try {

			const despesas = await db.sequelize.query(
				"INSERT INTO `c_ges`.`despesa`(`tipodespesa`,`descricao`,`data`,`edificio_idedificio`,`valor`) VALUES (?, ?, ?, ?, ?);",
				{ type: Sequelize.QueryTypes.INSERT, replacements: [tipodespesa, descricao, data, edificio_idedificio, valor] });

			res.json(despesas)




		} catch (error) {
			console.error(error)
		}


	}
	async function editExpense(req, res) {

		const {
			iddespesa,
			tipodespesa,
			descricao,
			data,
			edificio_idedificio,
			valor
		} = req.body;

		const { despesa } = req.db
		const despesas = await despesa.findOne({
			where: { iddespesa }
		})
			despesas.tipodespesa = tipodespesa
			despesas.descricao = descricao,
			despesas.data = data,
			despesas.edificio_idedificio = edificio_idedificio,
			despesas.valor = valor
		await despesas.save()

		res.json(despesas)
	}
	async function apagarExpense(req, res) {
		const { id } = req.params
		const { despesa } = req.db

		const despesas = await despesa.destroy({
			where: { iddespesa: id }
		})

		res.json(despesas)
	}

	router.get('/:edificioId', despesa)
	router.get('/', index)
	router.post('/', createExpense)
	router.put('/', editExpense)
	router.delete('/:id', apagarExpense)
	return router
})()


