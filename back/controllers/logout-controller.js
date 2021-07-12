const router = require('express').Router()
module.exports = ( function sair(req, res){
    // req.session.destroy((err) => {
    //     res.redirect('/') // will always fire after session is destroyed
    //   })
    //req.logout();
     // res.redirect('/');
    // router.get('/logout', function(req, res){
    //   req.logout();
    //   res.redirect('/');
    // });
     // return router

     router.get('/logout', function logout(req, res){

      var userId = req.user.id;
      req.session.destroy(function deleteUser() {
        authService.deleteUserProfile(userId)
        .then(function logOut() {
          req.logOut();
          res.redirect(config.destroySessionUrl);
          console.log('Log out succeeded');
        });
      });
    });
    return router
     
}) 




 // req.session.destroy(); 

