var express = require('express');//return a function 
const app = express(); //return a entire new object
// console.log(app);

app.listen(8080,()=>{
          console.log("server listening on port 8080");
});
