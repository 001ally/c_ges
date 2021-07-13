const router = require('express').Router()

const userControler = require('../controllers/user-controller')
const loginController = require('../controllers/login-controller')
const registroController = require('../controllers/registro-controller')
const edificioController = require('../controllers/edificio-controller')
const apartamentoController = require('../controllers/apartamento-controller')
const moradorController = require('../controllers/morador-controller')
const pagamentoController = require('../controllers/pagamento-controller')
const despesaController = require('../controllers/despesa-controller')
const logoutController= require('../controllers/logout-controller')
const { route } = require('../controllers/apartamento-controller')


router.post('/login', loginController.login)
router.post('/registro', registroController.store)
router.get('/logout', logoutController)

router.use('/user', userControler )
router.use('/edificio', edificioController)
router.use('/apartamento', apartamentoController)
router.use('/morador', moradorController)
router.use('/pagamento', pagamentoController)
router.use('/despesa', despesaController)




module.exports = router












