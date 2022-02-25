// // console.log("callback Js...");

// // let posts = [
// //     {title:'post one' , description:'This is post One', createdAt: new Date().getTime()},
// //     {title:'post two' ,description: 'This is post Two' , createdAt:new Date().getTime()},
// // ];


// // function getPosts(){
// //     setInterval(() => {
// //         let output = ``;
// //         posts.forEach((post,index) => {
// //            output += `<li>${post.title} editedAt: ${(new Date().getTime() - post.createdAt) / 1000} ago</li> `;
// //         });
// //      document.body.innerHTML = output;
// //     },1000)
    
// // }

// // function createPost(post,callback){
// //     setTimeout(() => {
// //      posts.push({...post ,createdAt: new Date().getTime()});
// //      callback();
// //     },2000)
// // }

// createPost({title:`post three` , description: `This is post three`} ,getPosts);
// createPost({title:`post four` , description: `This is post four`}, getPosts);

// console.log("Callback.js....");

// let posts = [
//     {title:"Post one" , description:"This is post one" ,category:'child'},
//     {title:"Post two" , description:"This is post two",category:'Adult'}
// ];

// function getPosts(){
//     setTimeout(function(){
//       let output = '';
  
//       posts.forEach((post) => {
//                      output += `<li>${post.title}</li>`;
//                   });

//     //   console.log(output);
//       document.body.innerHTML = output;
//     },1000);
//   }

//   function createPost(post){

//     return new Promise((resolve,reject) => {
      
//         setTimeout(() => {
         
//                 posts.push(post);
//                 const error = false;
    
//             if(!error){
//             // getPosts(); // doubt 
//             resolve();
//             }else {
//                 reject();
//             }
//           },2000)
//     })
    
// }

// // getPosts();
// createPost({title:'post three' , description:'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));



// function createPost(post,callback){

//     setTimeout(() => {
//   // ----- doubt two -----------

//         // console.log("Before adding post" , posts);
//       posts.push(post);
//       callback();
//     //   console.log("After adding post" , posts);

//     },2000)
// }

// function createPost(post){

//     setTimeout(() => {
//   // ----- doubt two -----

//         // console.log("Before adding post" , posts);
//     //   posts.push({...post,category:'animal'});
//       posts.push({...post,category:'animal'});

//     //   getPosts();
//     //   console.log("After adding post" , posts);

//     },2000)
// }

// getPosts();

// createPost({title:'Post three' , description:"This is third post"});

// createPost({title:'Post three' , description:"This is third post"});
// // createPost({title:'Post three' , description:"This is third post"},getPosts); // doubt 3 why i want to pass funtion in argument instead of calling that global function in there itself
// console.log(posts);

let posts = [
    {title:'post one' , description:'This is post One', createdAt: new Date().getTime()},
    {title:'post two' ,description: 'This is post Two' , createdAt:new Date().getTime()},
];


function getPosts(){
  setTimeout(function(){
    let output = '';

   // posts.forEach((post) => {
    //                output += `<li>${post.title}</li>`;
    //             });
    //  console.log("posts length :" + posts.length)
// ------- doubt one -----li

    for(let i=0;i < posts.length;i++){
       output += `<li>${posts[i].title}</li>`;
    }
    console.log(output);
    document.body.innerHTML = output;
  },1000);
}

  function createPost(post){

    return new Promise((resolve,reject) => {
        setTimeout(() => {
                posts.push(post);
                resolve();
          },2000)
    })
    
}

createPost({title:'Post three' , description:"This is third post"})
.then(getPosts);
