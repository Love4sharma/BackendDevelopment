const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log(' database Connected successfully!'))
  .catch((err)=>{ 
          console.log('db not connected!')
          console.log(err);
});