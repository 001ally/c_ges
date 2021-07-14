const { Sequelize } = require('../models/index');
const db = require('../models/index');

const router = require('express').Router()
module.exports = (function () {
  async function showPayments(req, res) {

    const {
      idedificio
    } = req.params;
    try {

      const pagamentos = await db.sequelize.query(
        "SELECT * from pagamentos WHERE idedificio = ?",
        {
          logging: console.log,
          plain: false,
          raw: true,
          type: Sequelize.QueryTypes.SELECT, replacements: [idedificio] 
        });


      res.json(pagamentos)
    } catch (error) {
      console.error(error)
    }


  }

  async function createPay(req, res) {
    const {morador, valor, data, idedificio } = req.body
    const { pagamentos } = req.db
    
    try {
      const pagamentos = await db.sequelize.query(
				"INSERT INTO `c_ges`.`pagamentos`(`valor`,`data`,`morador`,`idedificio`) VALUES (?, ?, ?, ?);",
				{ type: Sequelize.QueryTypes.INSERT, replacements: [valor, data, morador, idedificio] });

			res.json(pagamentos)
    }
    catch (error) {
      console.error(error)
    }

  }
  
  async function editPagamento(req, res) {
    const {
      idpagamentos,
      valor,
      data,
      morador_idmorador
    } = req.body

    const { pagamentos } = req.db
    const pagamento = await pagamentos.findOne({
      where: { idpagamentos }
    })
    pagamento.valor = valor,
      pagamento.data = data,
      pagamento.morador_idmorador = morador_idmorador

    await pagamento.save()
    res.json(pagamento)
  }
  async function apagarPagamento(req, res) {
    const { id } = req.params
    const { pagamentos } = req.db

    const pagamento = await pagamentos.destroy({
      where: { idpagamentos: id }
    })

    res.json(pagamento)
  }

  router.get('/:idedificio', showPayments)
  router.post('/', createPay)
  router.put('/', editPagamento)
  router.delete('/:id', apagarPagamento)
  return router

})()

