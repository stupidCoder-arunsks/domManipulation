console.log('Promises js....');

let posts = [
    { title: "Post one", description: "This is post one", category: 'child' },
    { title: "Post two", description: "This is post two", category: 'Adult' }
];

function getPosts() {
    setTimeout(function () {
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
            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('Something went worng while adding post');
            }
        }, 2000)
    })

}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // createPost(posts);
            const error = false;
            
            if(!error)
            resolve();
            else
            reject('Something went wrong while deleting posts');

            // posts.pop();
            // createPost(posts);
        }, 1000);
    });
}



createPost({ title: 'post three', description: 'this is post three' })
    .then(getPosts)
    .catch(err => console.log(err));

// deletePost().then(createPost).catch(err => console.log('err'));
// deletePost();
//  console.log(posts);
// posts.pop();
// console.log(posts);