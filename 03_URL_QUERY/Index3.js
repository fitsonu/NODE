const http = require("http");
const fs= require("fs");
const url=require("url");


const myServer =http.createServer((req,res)=>{
  // console.log("New Req received.");
  //console.log(req);


  if(req.url === "/favicon.ico") return res.end();
const log=`${Date.now()}: ${req.url} New Request Recived\n`;

// if true used then it parse query also
const myUrl = url.parse(req.url,true);
console.log(myUrl);

fs.appendFile("log.txt",log,(err,data)=>{

   switch(myUrl.pathname){

    case '/': res.end("Home page");
    break;
    // case '/about':res.end("I am sonu yadav"); break;

    case "/about":
       const username= myUrl.query.myName;   // extracting from url
       res.end(`Hi, ${username}`);
       break;


       // how search query dealing with database or fullfilling the need
      case "/search":
        const search =myUrl.query.search_query;
        res.end("Here are your results for " + search);


    default: res.end("404 Not found")
   }


  //res.end("Hello from the server.")
});

});

myServer.listen(8001,()=>console.log("Server started"));