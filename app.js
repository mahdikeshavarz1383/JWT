const express=require("express");
const jwt=require("jsonwebtoken");
const bcryptjs=require("bcryptjs");
const port=3000;
const app=express();
app.use(express.json());
const SECRET="mahdi_secret_key";
//temloye database
let users=[
    {id:1,username:"mahdi keshavarz",password:1234},
    {id:2,username:"sepide shahir",password:2231}
]
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/register",async(req,res)=>{
    const{username,password,id}=req.body
    if(!username ||!password){return res.status(400).json({message:"please fil up"})}
    const hashedPassword=await bcryptjs.hash(password,10);
    const newUser={
        id:users.length+1,
        username,
        password:hashedPassword
    }
    users.push(newUser);
    res.status(201).json({message:"seccssfully"})
})
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
app.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const user=users.find(u=>u.username==username)
    if(!user){return res.status(400).json({message:"not found"})}
    const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) {
    return res.status(400).json({message: "wrong password"})
  }
//######################################################
  const token = jwt.sign({id: user.id, username: user.username}, SECRET, {expiresIn: "1h"})
  res.json({message: "logged in", token})
})
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.listen(port,()=>{
    console.log("program is running on port:3000")
})