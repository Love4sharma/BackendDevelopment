const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');          
app.set('views', path.join(__dirname,'views'));

// root route 
app.get('/', (req, res) => {
          res.render('index');
})

app.get('/random',(req,res)=>{
          res.render('random.ejs');
})


app.listen(8080,()=>{
          console.log("server is running on port 8080");

})