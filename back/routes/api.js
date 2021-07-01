const router = require('express').Router()
const userControler = require('../controllers/user-controller')
const loginController = require('../controllers/login-controller')
const pagamentosController = require('../controllers/pagamentos-controller')

router.get('/user', userControler.index)
router.post('/login', loginController.login)
router.get('./pagamentos', pagamentosController.index)
   
module.exports = router












