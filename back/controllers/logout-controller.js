const router = require('express').Router()
const passport = require('passport');
const express = require('express')
var route = express()
module.exports = ( async function sair(req, res){

  //route = req.session.destroy
  //res.json({ auth: false, token: null });
    req.session.destroy((err) => {
        res.redirect('/') // will always fire after session is destroyed
      })
      // req.logout();
      // res.redirect('/');
    //req.logout();
     // res.redirect('/');
    // router.get('/logout', function(req, res){
    //   req.logout();
    //   res.redirect('/');
    // });
     // return router
    
  
  // app.post('/logout', function(req, res) {
  //     res.json({ auth: false, token: null });
  // })
  //    router.get('/logout', function logout(req, res){

  //     var userId = req.user.id;
  //     req.session.destroy(function deleteUser() {
  //       authService.deleteUserProfile(userId)
  //       .then(function logOut() {
  //         req.logOut();
  //         res.redirect(config.destroySessionUrl);
  //         console.log('Log out succeeded');
  //       });
  //     });
  //   });
    router.get('/', sair)
    return router
     
}) 




 // req.session.destroy(); 

