const express=require("express");
const fs=require("fs");
 const users=require("./MOCK_DATA.json");
const app=express();
const Port=8000;


//Middleware-Plugin
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
  console.log("Hello from middleware 1");

  // This will be avaiable to all the function.

 //this is creating new property i.e adding key value pair
req.myUserName="sonu yadav";
  // returning back from middleware i.e blocking/denied request
  return res.json({mgs:"Hello from middleware 1"});

  // calling to next function
  next();
});

app.use((req,res,next)=>{
  console.log("Hello from middleware2",req.myUserName);
  //benefit of this req.myUSerName  type property
   
  //ex
  // db query
  //credit card info

  req.creditCardNumber="442"; // in this we can store our card number and later on we can show it somewhere else



 // returning from 2nd middleware & not allow to move forward
  // return res.end("HEY");
  next();
});

//Routes
app.get("/users",(req,res)=>{
  const html=`<ul> ${users.map((user)=>`<li> ${user.first_name} <li>`).join("")}
  </ul>`;
  res.send(html);
});


//REST API
//routes creating-> what is routes.
app.get('/api/users',(req,res)=>{
  console.log("i am in get route",req.myUserName);
  // this is custom header
  res.setHeader("myName","Sonu yadav")
  return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
  const id=Number(req.params.id);
  const user=users.find((user)=>user.id===id);
  if(!user) {return res.status(404).json({err:"This user does not exist.."})}
  return res.json(user);
});

app.post('/api/users',(req,res)=>{
   // this is where we are sending data from using postman and storing it into the body

   const body=req.body;
  if(!body || 
    !body.name ||
     !body.age ||
      !body.city ||
       ! body.state)
       {return res.status(400).json({msg:"All fields are required."})}

  return res.json({status:"pending"});
});

// adding data into json
app.post('/api/users',(req,res)=>{
   const body=req.body;
   console.log(body);
   users.push({...body,id:users.length +1 });
   fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.status(201).json({status:"success",id:users.length});
    });
   });
 




app.listen(Port,()=>console.log(`Server Started at PORT ${Port}`));