const express=require("express");
const jwt=require("jsonwebtoken");
const bcryptjs=require("bcryptjs");
const port=3000;
const app=express();
app.use(express.json());
const SECRET="mahdi_secret_key";
//temloye database
let users=[];
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
    const isMatch = await bcryptjs.compare(password, user.password)
  if(!isMatch) {
    return res.status(400).json({message: "wrong password"})
  }
//######################################################
  const token = jwt.sign({id: user.id, username: user.username}, SECRET, {expiresIn: "1h"})
  res.json({message: "logged in", token})
})
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Middleware برای چک کردن توکن
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]
  
  if(!token) {
    return res.status(401).json({message: "توکن نداری!"})
  }

  try {
    const decoded = jwt.verify(token, SECRET)
    req.user = decoded
    next()
  } catch(err) {
    return res.status(401).json({message: "توکن نامعتبره!"})
  }
}

// Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({message: "خوش اومدی!", user: req.user})
})
app.listen(port,()=>{
    console.log("program is running on port:3000")
})