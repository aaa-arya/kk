import express, { application, json } from 'express';
const app=express();
const port=9000;

app.use("/i",(req,res)=>{
    res.render("index");


});


app.set("view engine","ejs");

app.use("/",(req,res)=>{
    // res.json({message :"helooo from api22"});

    // fetch("https://nearbypro.www-2048.com/mates/en/convert?id=vNyx2OEEqHk",{
    //     method :'POST',
    //     body:JSON.stringify({
    //         platform:'youtube',
    //         url:'https://www.youtube.com/watch?v=vNyx2OEEqHk',
    //         title:'title33',
    //         id:'vNyx2OEEqHk',
    //         ext:'mp3',
    //         note:'128k',
    //         format:'128k',
    //     }),
    //     headers:{"Content-Type":"application/json; Charset=UTF-8"
    // }
    // }).then(function (response){
    //     res.json({response});
    // }).then(function (data){
    //     // res.json({data});
    // })




    fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => 
  response.json())
  .then((json) => 
  res.json({response})
//   console.log(json));
  )
});
app.listen(9000,()=>{


    console.log('startingc server ii on port 9000');



})




