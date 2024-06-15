import e from 'express';
import express, { application, json } from 'express';

const app=express();
const port=9000;


app.use("/i",(req,res)=>{
    res.render("index");

    


});


app.set("view engine","ejs");

  
 //Here Create Download link of instahram reels
    app.use("/getreellink",(req,res)=>{
        var reelId=req.query.id;
         var hash = btoa('https://www.instagram.com/reel/'+reelId);
      

        fetch("https://download.solutionexist.com/", {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then((response) => 
          
              response.text()
          
          )
            .then((htmltext) =>{
              var start=htmltext.indexOf('name="token" value="');
              var end=htmltext.indexOf('downloadBtn');

              var token=htmltext.substring(start+20,end-59);
             SendRequest(reelId,token,hash,res);
              
            
 });

});



function SendRequest( reelId,token,hash,res){
      fetch("https://download.solutionexist.com/wp-json/aio-dl/video-data/", {
        method: "POST",
        body: JSON.stringify({
          url: "https://www.instagram.com/reel/"+reelId,
          token:token,
          hash: hash
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => 
       response.json() )
        .then((json) =>
  
        res.json(json)
      
   
        );
      
      
  }



app.use("/",(req,res)=>{

    // req.query.id;


    res.json({message :req.query.id});



//     fetch("https://download.solutionexist.com/wp-json/aio-dl/video-data/", {
//   method: "POST",
//   body: JSON.stringify({
//     url: "https://www.instagram.com/reel/Cs8QeljvgKD",
//     token: "bb797a7dc66d64c3c43810c21153d56b75df41d4b2a0d253bb45741d1c6b0801",
//     hash: "aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZWVsL0NzOFFlbGp2Z0tE1042YWlvLWRs"
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then((response) => 

//     response.json()

// )
//   .then((json) =>
    
//     res.json(json)




// );


    // fetch("https://nearbypro.www-2048.com/mates/en/convert?id=vNyx2OEEqHk", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         platform:'youtube',
    //                 url:'https://www.youtube.com/watch?v=vNyx2OEEqHk',
    //                 title:'title33',
    //                 id:'vNyx2OEEqHk',
    //                 ext:'mp3',
    //                 note:'128k',
    //                 format:'128k'
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //     .then((response) => 
        
    //     response.json()

        
    //     )
    //     .then((json) =>
        
    //         res.json({json})
        
    //     );




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

    });


app.listen(9000,()=>{


    console.log('startingc server ii on port 9000');



})




