var Song = require('../../models/song')
var router = require('express').Router()

router.get('/',function(req,res,next) {
   Song.find()
    .sort('-date')
    .exec(function(err,songs){
     if(err) { return next(err)}
     res.json(songs)
   })
})

router.post('/',function(req,res,next){
  var song = new Song( {
	   username:req.body.username,
     songtitle: req.body.songtitle,
     songid: req.body.songid,
     artist: req.body.artist,
     chordsequence: req.body.chordsequence,
     lyrics: req.body.lyrics
  })
  song.save(function(err,song) {
    if (err) { return next(err) }
	   res.status(201).json(song)
  })
})

module.exports = router
