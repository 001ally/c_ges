const router = require('express').Router()

const userControler = require('../controllers/user-controller')
const loginController = require('../controllers/login-controller')
const registroController = require('../controllers/registro-controller')
const edificioController = require('../controllers/edificio-controller')
const apartamentoController = require('../controllers/apartamento-controller')
const moradorController = require('../controllers/morador-controller')
const pagamentoController = require('../controllers/pagamento-controller')
const despesaController = require('../controllers/despesa-controller')

router.get('/user', userControler.index)
router.post('/login', loginController.login)
router.post('/registro', registroController.store)

router.use('/edificio', edificioController)
router.use('/apartamento', apartamentoController)
router.use('/morador', moradorController)
router.use('/pagamento', pagamentoController)

//router.get('/payments', pagamentoController.pagamento)

router.get('/despesa/:edificioId', despesaController.despesa)
router.get('/despesa', despesaController.index)
router.post('/despesa/create', despesaController.createExpense)


module.exports = router












