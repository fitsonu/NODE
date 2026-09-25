const fs = require("fs");
// Sync.. call
//fs.writeFileSync("./test.txt","Hello");


//async
// fs.writeFile("./test.txt","Hello world Async",(err)=>{});


//sync..-> do return error as well as content 

// const result=fs.readFileSync("./contact.txt","utf-8")
// console.log(result);


// asyn-> it does not return  and we have to manually error handle and result manage 
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//   if(err){console.log("Error",err);}
//   else{console.log(result);}
// });



//it append data
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());

//to copy 
//fs.cpSync("./test.txt","./copy.txt");


//to delete 
 //fs.unlinkSync("./copy.txt")

 //to metadata
//  console.log(fs.statSync("./test.txt"));

// to check file or not
console.log(fs.statSync("./test.txt").isFile());