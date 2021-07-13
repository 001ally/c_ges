const { Sequelize } = require('../models/index');
const db = require('../models/index');

const router = require('express').Router()
  module.exports =  ( function() {
    async function showPayments(req, res){
      const { pagamentos } = req.db

      return Db.sequelize.query("SELECT * FROM Post P WHERE (P.id NOT IN (SELECT postId FROM Ratings R WHERE R.userId="+userId+")) ",{ type: Sequelize.QueryTypes.SELECT });
      return Db.sequelize.query(`select p.idpagamentos, p.valor, p.data, m.nome
      from pagamentos p 
      join morador m
      on  ( m.idmorador = p.morador_idmorador)
      where idmorador = 1; ",`, { type: Sequelize.QueryTypes.SELECT });

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
        const { 
          valor, 
          data, 
          morador_idmorador 
        } = req.body
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
 
