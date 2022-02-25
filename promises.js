console.log('Promises js....');

// let posts = [
//     { title: "Post one", description: "This is post one", category: 'child' },
//     { title: "Post two", description: "This is post two", category: 'Adult' }
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             posts.push(post);
//             const error = false;

//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject('Something went worng while adding post');
//             }
//         }, 1000)
//     })

// }

// function printHelloWorld(){
//     return new Promise((resolve,reject) => {
//         console.log("Hello World !");
    
//         if(5 === 6){
//             resolve();
//         }else {
//             reject('Something went wrong in printHelloWorld..');
//         }
       
//     });
 
// }

// function printHello(){
//     console.log("Hello...")
// }

// createPost({ title: 'post three', description: 'this is post three' })
//     .then(getPosts).then(printHelloWorld).then(printHello)
//     .catch(err => console.log(err));

// function deletePost() {
//     return new Promise((resolve, reject) => {

//         if (posts.length > 0) {
//                 resolve();
//         }
//         else {
//             reject('Error: Array is empty now')
//         }
      
//     });
// }


// const timerId = setInterval(() => {
//     deletePost().then(() => {
//         posts.pop();
//         let lastPost = document.querySelector('body').lastChild;
//         lastPost.parentNode.removeChild(lastPost);
//     })
//         .catch(err => {
//             console.log(err);
//             clearInterval(timerId);
//         });
// }, 3000);

// const promise1 =  Promise.resolve('hello World');
// const promise2  = 10;
// // const promise2 = 10;
// const promise3 = new Promise((resolve,reject) =>
//     setTimeout(resolve,2000,"Good bye"));

// const promise4 = 'Hello arun';
// const promise5 = new Promise((resolve,reject) => 
// {
//    setTimeout(() => {
//         resolve();
//         'Good bye';
//    },2000);
// });

// Promise.all([promise1,promise2,promise3]).then(
//     values => console.log(values));

// console.log("promise 1: ",promise1);

// Promise.all([promise1,promise2,promise3])
// .then(
//     values => console.log(values))
//     .catch((Err) => console.log(Err));


// const a = Promise.all([promise1,promise2,promise3]);

// console.log('a' , a)
// console.log('promise 1' , promise1)




// let posts = [
//     { title: "Post one", description: "This is post one", category: 'child' },
//     { title: "Post two", description: "This is post two", category: 'Adult' }
// ];

// // async function loadPost for getposts and createPosts(){
   
// // }

//  function getPosts() {

//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            let post = { title: 'post three', description: 'this is post three' };
//             posts.push(post);
//             resolve();
//             const error = false;

//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject('Something went worng while adding post');
//             }
//         }, 1000)
//     })
// }

// async function loadDom(){
//     await createPost();
//     getPosts();
// }

// loadDom();

// getPosts();

// createPost({ title: 'post three', description: 'this is post three' })
//     .then(getPosts).catch(err => console.log(err));

// Example for async and await


// // Promises.all

// //// < ----------------- >

let posts = [
    { title: "Post one", description: "This is post one", category: 'child'},
    { title: "Post two", description: "This is post two", category: 'Adult'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);
                resolve();
            
        }, 1000)
    })

}

const user = {
   username: "arunsks",
   lastactivityTime: '22 of feb'
};

updateLastActivityTime = () => {
    return new Promise((resolve,reject)=> {
       setTimeout(()=> {
          user.lastactivityTime = new Date().getTime();
          resolve(user.lastactivityTime);
       },1000)
    });
}

function userUpdatePost(){
    Promise.all([createPost({ title: 'post three', description: 'this is post three' }),updateLastActivityTime])
    .then(([createPostResolves,updateLastActivityTimeResolves]) => {
     getPosts();
     console.log('update last activity time resolves :' ,updateLastActivityTimeResolves);
     console.log('create post resolves ' , createPostResolves);
    })
    .catch(err => console.log(err));
}

// createPost({ title: 'post three', description: 'this is post three' })
//     .then(getPosts).catch(err => console.log(err));

userUpdatePost();

// ------------------------------- //

// const promise1 =  Promise.resolve('hello World');
// const promise2  = 10;
// const promise3 = new Promise((resolve,reject) =>
//     setTimeout(resolve,2000,"Good bye"));

// const promise4 = 'Hello arun';
// const promise5 = new Promise((resolve,reject) => 
// {
//    setTimeout(() => {
//         resolve();
//         'Good bye';
//    },2000);
// });

// Promise.all([promise1,promise2,promise3]).then(
//     values => console.log(values));

// console.log("promise 1: ",promise1);

// Promise.all([promise1,promise2,promise3])
// .then(
//     values => console.log(values))
//     .catch((Err) => console.log(Err));