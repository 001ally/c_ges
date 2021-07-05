
  module.exports = {
    async pagamento(req, res){
        const { pagamentos } = req.db

        const pagamento = await pagamentos.findAll({
            attributes: [
                "idpagamentos",
                "valor",
                "data",
                "morador_idmorador"
            ]
        }) 
          res.json(pagamento)
        } 
}