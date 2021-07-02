const router = require('express').Router()
const userControler = require('../controllers/user-controller')
const loginController = require('../controllers/login-controller')


router.get('/user', userControler.index)
router.post('/login', loginController.login)

   
module.exports = router












