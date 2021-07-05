module.exports = {
	async index(req, res) {

		let result = []

		const { edificio } = req.db

		const { user } = req.db

		for (let index = 0; index < edificios.length; index++) {
			const element = edificios[index];

			const apartamentos = await apartamento.findOne({
				where: { edificio_idedificio: element.idedificio },
				attributes: [
					"idapartamento",
					"andar",
					"numero",
					"edificio_idedificio"
				]

			})

			const edificios = await edificio.findAll({
				attributes: [
					"idedificio",
					"nome",
					"fotografia",
					"user_iduser"
				]
			})  //res.json(edificios)

			element.apartamentos = apartamentos;

			result.push(element)

		} res.json(result)

	}
}