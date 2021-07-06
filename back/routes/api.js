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
router.post('/registro',registroController.store)
router.get('/edificio', edificioController.index)
router.post('/edificio', edificioController.index)
router.get('/apartamento', apartamentoController.apart)
router.post('/apartamento', apartamentoController.apart)
router.get('/apartamento/:id', apartamentoController.getAptByIdEdificio)
router.get('/morador', moradorController.morador)
router.get('/despesa', despesaController.despesa)

   
module.exports = router












