const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


// app.use(cookieParser());
app.use(cookieParser("youneedabettersecret"));



app.get('/', (req, res)=>{
      console.log(req.cookies);
      // res.send(req.cookies);  //all easy cookies
      res.send(req.signedCookies); //all signed cookies
});


app.get('/signedcookies', (req, res)=>{
      res.cookie('movie','border',{signed:true});
      res.send("cookies send successfully");
})

// app.get('/setcookies',(req,res)=>{
//       res.cookie('mode','dark');
//       res.cookie('location','mathura');
//       res.cookie('name','love sharma');
//       res.send("server have send cookies")
// })

// app.get('/getcookies',(req,res)=>{
//      let {mode,location,name}= req.cookies;
//      res.send(`hi my name is ${name} and my location is ${location} and my favourite theme is ${mode}`);
// })



app.listen(8080,()=>{
      console.log("server started");
})