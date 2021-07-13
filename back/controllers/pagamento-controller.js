const { Sequelize } = require('../models/index');
const db = require('../models/index');

const router = require('express').Router()
module.exports = (function () {
  async function showPayments(req, res) {
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
  async function createPay(req, res) {
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
  async function editPagamento (req, res) {
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
    pagamento.morador_idmorador =  morador_idmorador
    
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

  router.get('/', showPayments)
  router.post('/', createPay)
  router.put('/', editPagamento)
  router.delete('/:id', apagarPagamento)
  return router

})()

