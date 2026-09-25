const fs=require("fs");

 // example of blocking operation(Sync)
console.log("1");

const result=fs.readFileSync("contact.txt","utf-8");
console.log(result);

console.log("2");

// Non blocking(async result)
console.log("1");

fs.readFile("contact.txt","utf-8",(err,response)=>{
  console.log(response);
});
console.log("2")
console.log("3");




// it gives the length of the cpu. and it is 8 so it can take upto max 8 threads
const os=require("os");
console.log(os.cpus().length);