import express from 'express';
const app=express();
const port=9000;

app.use("/i",(req,res)=>{
    res.render("index");


});


app.set("view engine","ejs");

app.use("/",(req,res)=>{
    res.json({message :"helooo from api22"});


});
app.listen(9000,()=>{


    console.log('startingc server ii on port 9000');



})




