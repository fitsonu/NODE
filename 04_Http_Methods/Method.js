// const http = require("http");
// const fs= require("fs");
// const url=require("url");
const express=require("express");

// function myHandler(req,res){
//     if(req.url === "/favicon.ico") return res.end();
// const log=`${Date.now()}: ${req.method}${req.url} New Request Recived\n`;

// // if true used then it parse query also
// const myUrl = url.parse(req.url,true);

// fs.appendFile("Http.txt",log,(err,data)=>{

//    switch(myUrl.pathname){

//     case '/': 
//     if(req.method === 'GET') res.end("Home page");
//     break;
  
//     case "/about":
//        const username= myUrl.query.myName; 
//        res.end(`Hi, ${username}`);
//        break;

//       case "/search":
//         const search =myUrl.query.search_query;
//         res.end("Here are your results for " + search);
      
//       case '/signup':
//         if(req.method=== 'GET') res.end('This is a signup form');
//         else if(req.method === 'POST'){
//           //DB query
//           res.end("Success");
//         }
//       break;
//     default: res.end("404 Not found")
//    }

// });

// }

const app=express();

app.get("/",(req,res)=>{
  return res.send("Hello From Home Page");
});
app.get("/about",(req,res)=>{
  return res.send(`Hello ${req.query.name} from About Page`);
});


// const myServer =http.createServer(app);
// myServer.listen(8001,()=>console.log("Server started"));

// Done by express
app.listen(8001,()=>console.log("Server Started!"));