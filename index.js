const  NodeMediaServer  = require('node-media-server');
const express=require('express');
const app=express();
const port=8000;



const config = {
  rtmp: {
      port: 1935,//
      chunk_size: 60000,
      gop_cache: true,
      ping: 60,
      ping_timeout: 30
  },
  http: {
      port: 8000,
      allow_origin: '*'
  }
};
var nms = new NodeMediaServer(config);
  nms.run();
app.get('/',(req,res)=>{
  console.log('request');



})

app.listen(port,()=>{

  console.log('runing server 12');



})



nms.on('getFilePath', (streamPath, oupath, mp4Filename) => {
  console.log('---------------- get file path ---------------');
  console.log(streamPath);
  console.log(oupath);
  console.log(mp4Filename);
});

nms.on('ready',()=>{
  console.log("ready");
})

nms.on("preConnect", (id, args) => {
    console.log(
      "[NodeEvent on preConnect]"    );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postConnect", (id, args) => {
    console.log(
      "[NodeEvent on postConnect]"    );
  });
  
  nms.on("doneConnect", (id, args) => {
    console.log(
      "[NodeEvent on doneConnect]" +id   );
  });
  
  nms.on("prePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePublish]"    );
    // Implement authentication for your streamers...
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPublish]"    );
  });
  
  nms.on("donePublish", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePublish]"    );
  });
  
  nms.on("prePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on prePlay]   " );
    // let session = nms.getSession(id);
    // session.reject();
  });
  
  nms.on("postPlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on postPlay]"    );
  });
  
  nms.on("donePlay", (id, StreamPath, args) => {
    console.log(
      "[NodeEvent on donePlay]",    );
  });
























// // import e from 'express';
// // import express, { application, json } from 'express';
// const express=require('express');
// const fs=require('fs');
// const http = require('https'); // or 'https' for https:// URLs
// const Path = require('path')
//   const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
//   const ffmpeg = require('fluent-ffmpeg');
// const { getServers } = require('dns');
// ffmpeg.setFfmpegPath(ffmpegPath);

// const app=express();

// const port=9000;


// app.use("/i",(req,res)=>{
//     res.render("index");
// });


// app.set("view engine","ejs");

// app.use('/video',(req,res)=>{


//   const c=req.url.replace('http://127.0.0.1:9000/getreellink');
//   console.log(c);


//   const videoUrl1='https://instagram.ftip5-1.fna.fbcdn.net/o1/v/t16/f1/m82/B44D135EE0CB25E3A4A02EDE90C86BA8_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uY2xpcHMuYzIuNzIwLmJhc2VsaW5lIn0&_nc_ht=instagram.ftip5-1.fna.fbcdn.net&_nc_cat=111&vs=6549837695039591_3329541574&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CNDREMTM1RUUwQ0IyNUUzQTRBMDJFREU5MEM4NkJBOF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBSDV4eGZDUWQwZkxZMERBQk1tMUwwQnZGczlicV9FQUFBRhUCAsgBACgAGAAbABUAACaS4LzmjITqPxUCKAJDMywXQDhu2RaHKwIYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HAA%3D%3D&_nc_rid=259858606a&ccb=9-4&oh=00_AYBUt6LjnkCtf-owE1Oi11iULE1wKDI273ObBVtxf0qmXw&oe=666EF225&_nc_sid=2999b8&dl=1';
 
//   const url = videoUrl
//   const path = Path.resolve(__dirname, 'media', 'video.mp4');//D:\material\VS CODE\WEBREQUEST\iii\media\video.mp4
  
//   ffmpeg.setFfmpegPath(ffmpegPath);
//   // res.json("okkkk done");

//   ffmpeg(videoUrl1)
// .videoCodec('libx264')
//   .size('400x720')
// .format('mp4')
// .outputOptions(['-frag_duration 1000','-movflags frag_keyframe+faststart','-pix_fmt yuv420p'])
// .output(res,{ end:true })
// .on('error', function(err, stdout, stderr) {
// console.log('an error happened: ' + err.message + stdout + stderr);
// })
// .run();









// //     console.log(path);
// //       //  fs.unlinkSync(path);//To delete file

// //     const file = fs.createWriteStream("./path.mp4");
// // const request = http.get(videoUrl, function(response) {
// //    response.pipe(file);
// //   //  res.pipe(file);
// // });



// //   ffmpeg(videoUrl)
// // .videoCodec('libx264')
// //   .size('400x720')
// // .format('mp4')
// // .outputOptions(['-frag_duration 1000','-movflags frag_keyframe+faststart','-pix_fmt yuv420p'])
// // .output(res,{ end:true })
// // .on('error', function(err, stdout, stderr) {
// // console.log('an error happened: ' + err.message + stdout + stderr);
// // })
// // .run();






// //    // after download completed close filestream
// //    file.on("finish", () => {
// //        file.close();
// //        console.log("Download Completed");

// //        ffmpeg("video")
// //        .output(path)
// //        .videoCodec('libx264')
// //        .size('1100x720')
// //        .on('error',error=>{
// //         console.log("eroor ffemge");
// //        })
     
// //        .on('progress',progress=>{
// //         console.log('ffemeg..progress...'+progress);
// //        }).run();




// //    });
// // });
    

// })

  
//  //Here Create Download link of instahram reels
//     app.use("/getreellink",(req,res)=>{

//       const c=req.url.replace('http://127.0.0.1:9000/getreellink/','');
//       const c2=c.replace('.mp4','');
 
//       var reelId=c2.replace('/','');
//          var hash = btoa('https://www.instagram.com/reel/'+reelId);
      

//         fetch("https://download.solutionexist.com/", {
//             method: "GET",
//             headers: {
//               "Content-type": "application/json; charset=UTF-8"
//             }
//           })
//             .then((response) => 
          
//               response.text()
          
//           )
//             .then((htmltext) =>{
//               var start=htmltext.indexOf('name="token" value="');
//               var end=htmltext.indexOf('downloadBtn');

//               var token=htmltext.substring(start+20,end-59);
//              SendRequest(reelId,token,hash,res);
              
            
//  });

// });



// app.use("/reel",(req,res)=>{

//   var id=req.query.id;
//   const url = 'https://instagram-scraper-2022.p.rapidapi.com/ig/reel/?shortcode=CXt13whLoaO';
// try {
// 	  fetch(url, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '71d31f3b7bmsh3a72693070cb69bp1538f4jsn6fe1f59eb28a',
//         'x-rapidapi-host': 'instagram-scraper-2022.p.rapidapi.com'
//       }
//     }).then(response=>{
// 	console.log(response);
//   res.send('done');
//   res.end;

//   });

// } catch (error) {
// 	console.error(error);
// }




// })




// function SendRequest( reelId,token,hash,res){
//       fetch("https://download.solutionexist.com/wp-json/aio-dl/video-data/", {
//         method: "POST",
//         body: JSON.stringify({
//           url: "https://www.instagram.com/reel/"+reelId,
//           token:token,
//           hash: hash
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8"
//         }
//       })
//         .then((response) => 
//        response.json() )
//         .then((json) =>
  
// {
//           var rr=json.medias;

         
//           var videoUrl=rr[0].url;
//           console.log(videoUrl)
        
//            ffmpeg(videoUrl)
//           .videoCodec('libx264')
//             .size('200x480')
//           .format('mp4')
//           .outputOptions(['-frag_duration 1000','-movflags frag_keyframe+faststart','-pix_fmt yuv420p'])
//           .output(res,{ end:true })
//           .on('error', function(err, stdout, stderr) {
//             res.end();
//           console.log('an error happened: ' + err.message + stdout + stderr);
//           })
//           .run();
          
      
//   } 
//         );
         
      
//   }

 



// app.use("/",(req,res)=>{

//     // req.query.id;


//     res.json({message :req.query.id});



// //     fetch("https://download.solutionexist.com/wp-json/aio-dl/video-data/", {
// //   method: "POST",
// //   body: JSON.stringify({
// //     url: "https://www.instagram.com/reel/Cs8QeljvgKD",
// //     token: "bb797a7dc66d64c3c43810c21153d56b75df41d4b2a0d253bb45741d1c6b0801",
// //     hash: "aHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZWVsL0NzOFFlbGp2Z0tE1042YWlvLWRs"
// //   }),
// //   headers: {
// //     "Content-type": "application/json; charset=UTF-8"
// //   }
// // })
// //   .then((response) => 

// //     response.json()

// // )
// //   .then((json) =>
    
// //     res.json(json)




// // );


//     // fetch("https://nearbypro.www-2048.com/mates/en/convert?id=vNyx2OEEqHk", {
//     //     method: "POST",
//     //     body: JSON.stringify({
//     //         platform:'youtube',
//     //                 url:'https://www.youtube.com/watch?v=vNyx2OEEqHk',
//     //                 title:'title33',
//     //                 id:'vNyx2OEEqHk',
//     //                 ext:'mp3',
//     //                 note:'128k',
//     //                 format:'128k'
//     //     }),
//     //     headers: {
//     //       "Content-type": "application/json; charset=UTF-8"
//     //     }
//     //   })
//     //     .then((response) => 
        
//     //     response.json()

        
//     //     )
//     //     .then((json) =>
        
//     //         res.json({json})
        
//     //     );




//     // res.json({message :"helooo from api22"});

//     // fetch("https://nearbypro.www-2048.com/mates/en/convert?id=vNyx2OEEqHk",{
//     //     method :'POST',
//     //     body:JSON.stringify({
//     //         platform:'youtube',
//     //         url:'https://www.youtube.com/watch?v=vNyx2OEEqHk',
//     //         title:'title33',
//     //         id:'vNyx2OEEqHk',
//     //         ext:'mp3',
//     //         note:'128k',
//     //         format:'128k',
//     //     }),
//     //     headers:{"Content-Type":"application/json; Charset=UTF-8"
//     // }
//     // }).then(function (response){
//     //     res.json({response});
//     // }).then(function (data){
//     //     // res.json({data});

//     });


    
// app.listen(9000,()=>{


//     console.log('startingc server ii on port 9000');



// })




