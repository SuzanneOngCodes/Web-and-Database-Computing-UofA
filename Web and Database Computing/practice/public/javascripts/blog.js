/* Copyright 2018-2021, University of Adelaide */

/* AJAX Load Blog Posts */
function loadPosts(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            // Show user options if logged in
            if (data.user !== null) {
                for(let el of document.querySelectorAll( '.anon' )){
                    el.style.display = 'none';
                }
                for(let el of document.querySelectorAll( '.user' )){
                    el.style.display = 'block';
                }
                if (data.user.admin === 1) {
                    for(let el of document.querySelectorAll( '.admin' )){
                        el.style.display = 'block';
                    }
                }
            }

            let container = document.querySelector( '#posts' );

            // Clear old posts
            let old_posts = document.querySelectorAll( 'section.post' );
            for(let post of old_posts){
                container.removeChild(post);
            }

            // Display new posts
            for (let post of data.posts) {
                container.appendChild(renderPost(post));
            }
        }
    };

    var numposts = document.querySelector( '#numposts' ).value;
    xhttp.open("GET", "/posts.json?num="+numposts, true);
    xhttp.send();

}

/* AJAX Submit New Blog Post */
function submitPost(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 2 && this.status == 200) {

            // Post Successful, redirect to home
            document.querySelector( '#status' ).innerText = "Blog Post Successful...";

            window.location.pathname = "/";

        } else if (this.readyState == 2 && this.status == 401) {

            // Not logged in
            document.querySelector( '#status' ).innerText = "Please log in.";

            window.location.pathname = "/login.html";

        } else if (this.readyState == 2 && this.status >= 400) {

            // Error
            document.querySelector( '#status' ).innerText = "Error Adding Blog Post.";

        }
    };

    var blogPost = { title: document.querySelector( '#postTitle' ).value,
                     body:  document.querySelector( '#postBody'  ).value  };

    xhttp.open("POST", "/newPost", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(blogPost));

}

/* AJAX Login */
function login(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 2 && this.status == 200) {

            // Login Successful, redirect to URL paramter "target"
            document.querySelector( '#status' ).innerText = "Login Successful...";

            let path = (new URLSearchParams(window.location.search)).get("target");
            if(path === null){
                path = '/';
            }

            window.location.pathname = path;

        } else if (this.readyState == 2 && this.status >= 400) {

            // Login Failed
            document.querySelector( '#status' ).innerText = "Login Failed.";

        }
    };

    var credentials = { username: document.querySelector( '#uname' ).value,
                        password: document.querySelector( '#pword' ).value  };
    xhttp.open("POST", "/login", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(credentials));

}

/* AJAX Logout */
function logout(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 2 && this.status == 200) {

            // Logout Successful, redirect to home
            window.location.pathname = "/";

        }
    };

    xhttp.open("POST", "/logout", true);
    xhttp.send();

}

/* AJAX List Users */
function showUsers(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(this.responseText);

            // Clear old table entries
            document.querySelector( '#users tbody' ).innerHTML = '';

            // Display current entries
            for (let user of users) {

                let id = user.id;
                let admin = 'user';
                if(user.admin===1){
                    admin='admin';
                }
                let uname = user.username;
                let name = user.name;
                let img = user.image;

                let tr = document.createElement('TR');
                tr.className = 'user';

                let td_uid = document.createElement('TD');
                let td_adm = document.createElement('TD');
                let td_una = document.createElement('TD');
                let td_nam = document.createElement('TD');
                let td_img = document.createElement('TD');

                td_uid.innerText = id;
                td_adm.innerText = admin;
                td_una.innerText = uname;
                td_nam.innerText = name;
                td_img.innerText = img;

                tr.appendChild(td_uid);
                tr.appendChild(td_adm);
                tr.appendChild(td_una);
                tr.appendChild(td_nam);
                tr.appendChild(td_img);


                document.querySelector( '#users tbody' ).appendChild(tr);
            }

        } else if (this.readyState == 2 && this.status == 401) {

            // Not logged in
            document.querySelector( '#status' ).innerText = "Please log in. Redirecting...";

            window.location.pathname = "/login.html";

        } else if (this.readyState == 2 && this.status == 403) {

            // Not an admin user
            document.querySelector( '#status' ).innerText = "Unauthorised. Redirecting...";

            window.location.pathname = "/";

        }
    };

    xhttp.open("GET", "/users.json", true);
    xhttp.send();

}

/* Build Blog Post HTML */
function renderPost(postData){

    var postStructure = `
    <header class="post-header">
        <img width="48" height="48" alt="" class="post-avatar" src="">
        <h2 class="post-title"></h2>
        <p class="post-meta">
            By <a class="post-author" href="#"></a> on <span class="post-date"></span>
        </p>
    </header>
    <div class="post-body"><p></p></div>`;
    var post = document.createElement('SECTION');
    post.className = "post";
    post.innerHTML = postStructure;

    post.querySelector('img.post-avatar').src = postData.authorImg;
    post.querySelector('img.post-avatar').alt = postData.author;
    post.querySelector('a.post-author'  ).innerText = postData.author;
    post.querySelector('span.post-date' ).innerText = (new Date(postData.date+"Z")).toLocaleString();
    post.querySelector('h2.post-title'  ).innerText = postData.title;
    post.querySelector('div.post-body p').innerText = postData.body;

    return(post);

}

