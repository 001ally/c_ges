
  module.exports = {
    async despesa(req, res, params){
        const { despesa } = req.db
        const {edificioId} = req.params;
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
       
}

