
  module.exports = {
    async despesa(req, res){
        const { despesa } = req.db

        const despesas = await despesa.findAll({
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
}

