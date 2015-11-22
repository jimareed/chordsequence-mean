var db = require('../db')
var Song = db.model('Song', {
   username: { type: String, required: true },
   songtitle: { type: String, required: false },
   songid: { type: String, required: true },
   artist: { type: String, required: false },
   chordsequence: { type: String, required: false },
   lyrics: { type: String, required: false },
   date: { type:Date, required: true, default: Date.now }
})
module.exports = Song
