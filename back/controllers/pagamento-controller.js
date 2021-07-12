const router = require('express').Router()
  module.exports =  ( function() {
    async function showPayments(req, res){
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
      async function createPay (req, res){
        const { valor, data, morador_idmorador } = req.body
        const { pagamentos } = req.db
        const pagamento = await pagamentos.create({
                valor,
                data,
                morador_idmorador
           
        }) 
          res.json(pagamento)
        } 
        router.get('/', showPayments)
        router.post('/', createPay)
        //router.put('/', editMorador)
        return router
    
  })()
 
