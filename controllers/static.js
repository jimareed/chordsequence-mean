var express = require('express')
var router = require('express').Router()

router.use(express.static(__dirname + '/../assets'))

router.get('/',function(req,res) {
  res.sendfile('layouts/songs.html')
})

router.get('/addsong',function(req,res) {
  res.sendfile('layouts/addsong.html')
})


module.exports = router
