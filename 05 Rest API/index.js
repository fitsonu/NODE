const express=require("express");
const fs=require("fs");
const users=require("./MOCK_DATA.json");
const app=express();
const Port=8000;


//Middleware-Plugin
app.use(express.urlencoded({extended:false}));


//Routes
app.get("/users",(req,res)=>{
  const html=`
  <ul>
  ${users.map((user)=>`
  <li>
  ${user.first_name}
  </li>`).join("")}
  </ul>
  `;
  res.send(html);
});


//REST API
//routes creating-> what is routes ?
app.get('/api/users',(req,res)=>{
  return res.json(users);
});

app.get("/api/users/:id",(req,res)=>{
  const id=Number(req.params.id);
  const user=users.find((user)=>user.id===id);
  return res.json(user);
});


// app.post('/api/users',(req,res)=>{
//    // this is where we are sending data from using postman and storing it into the body

//    const body=req.body;
//    console.log("Body",body);
//   return res.json({status:"pending"});
// });

// adding data into json
app.post('/api/users',(req,res)=>{
   const body=req.body;
   console.log(body);
   users.push({...body,id:users.length +1 });
   fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"success",id:users.length});
    });
   });
 
 
// upadte the user with id
app.patch('/api/users/:id',(req,res)=>{
  return res.json({status:"pending"});
});

app.delete("/api/users/:id",(req,res)=>{
  return res.json({status:"pending"});
});



/// we can do all this in one simple using route
app.route('/api/users/:id')
.get((req,res)=>{
  const id=Number(req.params.id);
  const user=users.find((users)=> user.id ===id);
return res.json(user);
})

.patch((req,res)=>{
  // Edit user with id
return res.json({status:"Pending"});
})
.delete((req,res)=>{
  // Delete user with id
return res.json({status:"pending"});
})



app.listen(Port,()=>console.log(`Server Started at PORT ${Port}`));