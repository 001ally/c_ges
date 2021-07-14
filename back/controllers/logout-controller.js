const router = require('express').Router()
const passport = require('passport');
const express = require('express')

module.exports = ( async function sair(req, res){

    req.session.destroy((err) => {
        res.redirect('/') 
      })
  console.log('tchau');
    router.get('/', sair)
    return router
     
}) 

