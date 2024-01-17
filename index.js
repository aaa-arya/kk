import express, { application, json } from 'express';
const app=express();
const port=9000;

app.use("/i",(req,res)=>{
    res.render("index");


});


app.set("view engine","ejs");

app.use("/",(req,res)=>{
    // res.json({message :"helooo from api22"});

    fetch("",{
        method :'POST',
        body:JSON.stringify({
            platform:'youtube',
            url:'https://www.youtube.com/watch?v=22bLNq6iCjU',
            title:'title33',
            id:'22bLNq6iCjU',
            ext:'mp3',
            note:'128k',
            format:'128k',
        }),
        headers:{"Content-Type":"application/json; Charset=UTF-9"
    }
    }).then(function (response){
        res.json({message :"helooo from api22"+response});
    })

});
app.listen(9000,()=>{


    console.log('startingc server ii on port 9000');



})




