import express from 'express';
const app=express();
const port=9000;
// const serverless = require('serverless-http');


app.use("/",(req,res)=>{
    res.json({message :"helooo from api"});
});
app.listen(9000,()=>{


    console.log('startingc server ii on port 9000');
})

// let record=[];


// // app.listen(
// //     PORT,
// //     ()=> console.log('server running ${PORT}')
// // );
// router.get('/t',(req,res) =>{
//     res.send('200 sujjjet');

// });

// router.get('/',(req,res) =>{
//     res.send('200 sujjjet');

// });



