var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/songs2',function(){
   console.log('mongodb connected')
})
module.exports = mongoose
