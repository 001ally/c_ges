const { Sequelize } = require('../models/index');
const db = require('../models/index');

module.exports = {
	async despesa(req, res, params) {
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
	},
	async createExpense(req, res, params) {

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
			{ type: Sequelize.QueryTypes.INSERT , replacements: [tipodespesa, descricao, data, edificio_idedificio, valor ] });
	
			res.json(despesas)

		} catch (error) {
			console.error(error)
		}


	}

}

