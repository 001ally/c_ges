const { Sequelize } = require('../models/index');
const db = require('../models/index');

const router = require('express').Router()
module.exports = (function () {
  async function showPayments(req, res) {

    const {
      idedificio,
      idmorador
    } = req.params;
    try {

      const pagamentos = await db.sequelize.query(
        "SELECT edf.idedificio, edf.nome AS edificio, apt.idapartamentos, apt.numero AS apt_numero, apt.andar AS apt_andar, morador.idmorador, morador.nome AS morador, pay.idpagamentos, pay.valor, pay.data FROM c_ges.pagamentos AS pay INNER JOIN c_ges.morador ON (pay.morador_idmorador = morador.idmorador) INNER JOIN c_ges.apartamento AS apt ON (morador.apartamento_idapartamentos = apt.idapartamentos) INNER JOIN c_ges.edificio AS edf ON (apt.edificio_idedificio = edf.idedificio) WHERE apt.edificio_idedificio = ? AND morador.idmorador = ?",
        {
          logging: console.log,
          plain: false,
          raw: true,
          type: Sequelize.QueryTypes.SELECT, replacements: [idedificio, idmorador ] 
        });


      res.json(pagamentos)
    } catch (error) {
      console.error(error)
    }


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

  router.get('/:idedificio/:idmorador', showPayments)
  router.post('/', createPay)
  router.put('/', editPagamento)
  router.delete('/:id', apagarPagamento)
  return router

})()

