module.exports = {
	async morador(req, res) {
		const { apartamento } = req.db

		const { morador } = req.db

		const moradores = await morador.findAll({
			attributes: [
				"idmorador",
				"nome",
				"email",
				"proprietario",
				"contacto",
				"pagamentototal",
				"apartamento_idapartamentos"

			]
		})

		res.json(moradores)
	}
}