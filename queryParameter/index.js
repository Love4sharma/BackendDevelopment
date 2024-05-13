const express=require("express");
const app= express();



app.get('/search',(req,res)=>{
          console.log(req.query.search);
          let {search}=req.query;
          console.log(search);
          res.send(search);
})




app.listen(8080,()=>{
          console.log("mera server chal gaya hai");
});