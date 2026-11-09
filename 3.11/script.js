function getUser(userId) {
    return fetch(` https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json());
}

/*
getUser(1)
   .then(user => {
       console.log("User's name:", user.name);
   })
   .catch(error => console.log(error));
*/

/////////////////////////////////////

function getPost(postId) {
    return fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json());
}

/*
getPost(1)
   .then(post => {
       console.log("Post's title:", post.title);
   })
   .catch(error => console.log(error));
*/

////////////////////////////////

function getUserEmail(userId) {
    return fetch(` https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json());
}

/*
getUserEmail(1)
   .then(user => {
       console.log("User's email:", user.email);
   })
   .catch(error => console.log(error));
   */

//////////////////////////////////////

function listUserTodos(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(response => response.json());
}

/*
listUserTodos(1)
    .then(todos => {
        console.log("User", 1, "has " + todos.length + " todos.");
    })
    .catch(error => console.log(error));
*/

//////////////////////////////////


function checkPostExists(postId) {
    return fetch(` https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Post not found");
            }
        });
}

/*
checkPostExists(1)
    .then(post => {
        console.log("Post exists");
    })
    .catch(error => console.log("Post not found"));
*/

//////////////////////////////////////////

function fetchWithDelay(url, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(fetch(url));
        }, delay);
    })
        .then(response => response.text());
}
/*
fetchWithDelay("https://jsonplaceholder.typicode.com/posts/1", 2000)
    .then(text => {
        console.log("First 50 chars:", text.substring(0, 50));
    })
    .catch(error => console.log(error));
    */
///////////////////////////////////////////

function showKeys(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => Object.keys(data));
}

/*
showKeys("https://jsonplaceholder.typicode.com/todos/1")
    .then(keys => console.log("Keys:", keys))
    .catch(error => console.log(error));

*/

//////////////////////////////////////////

function getUserFirstPost(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log("First post title:", posts[0].title);
        })
        .catch(error => console.log(error));
}

//getUserFirstPost(1);

///////////////////////////////////////////


function getPostCommentsCount(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => {
            console.log("Comments count:", comments.length);
        })
        .catch(error => console.log(error));
}


//getPostCommentsCount(1);

///////////////////////////////////////

function todoAndUser(todoId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(todo => { return fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`) })
        .then(response => response.json())
        .then(user => console.log("User:", user.name))
}

todoAndUser(1);

