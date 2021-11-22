//3.1
function hoverBox(){
    var x = document.getElementById("mcount").innerHTML;
    x++;
    document.getElementById("mcount").innerHTML = x;
}

// Array
let allPosts = [];
var search = 0;

//3.2
function createPost(){
    var count = document.getElementsByName("quantity")[0].value;
    //3.4
    for (var i = 0; i < count; i++){
        var d = document.createElement("p");
        var x = document.getElementsByTagName("textarea").length - 1 ;
        var y = document.getElementsByClassName("post-content").length - 1 ;
        var post = document.createElement("p");
        post.innerHTML= document.getElementsByTagName("textarea")[x].value;

        //3.8 Add remove button
        d.innerHTML = `
        <button style=float:right onclick="deletePost(${i})">X</button>
        <p class="post-time greyBold">${new Date()}<p>
        `;

        if(document.getElementsByName("color")[0].checked == true){
            //post.style.color = document.getElementsByName("color")[0].value;
            post.classList.add("blue");
        }else if (document.getElementsByName("color")[1].checked == true) {
            //post.style.color = document.getElementsByName("color")[1].value;
            post.classList.add("red");
        }

        //3.6
        if(document.getElementsByName("style")[0].checked == true){
            //post.style.fontWeight = document.getElementsByName("style")[0].value;
            post.classList.add("bold");
        }

        if(document.getElementsByName("style")[1].checked == true){
            post.classList.add("italic");
        }

        // Add class name post
        post.classList.add("post-content");

        let postage = {
            "date":d,
            "content":post,
            "level":search
        };

        allPosts.push(postage);

        // Add options in drop down
        var options = document.createElement("option");
        options.value = i;
        options.innerHTML = `
        <option onchange="addReply(${i})">${allPosts[i].content.innerHTML}</option>`;
        document.getElementsByTagName("select")[0].appendChild(options);

        if (allPosts.length<=10){
            document.getElementById("posts").appendChild(d);
            document.getElementById("posts").appendChild(post);
        }
    }

    // value not innerHTML
    // To update instead of adding
    // document.getElementsByClassName("post-time")[i].innerHTML = new Date();
    // document.getElementsByClassName("post-content")[i].innerHTML = document.getElementsByTagName("textarea")[i].value;
    // To add
    // document.getElementsByClassName("post-time")[0].innerHTML = new Date();
    // document.getElementsByClassName("post-content")[0].innerHTML = document.textname.innerHTML +"<br>";
}


//3.3
function changeMenu(){
    var x = document.getElementById("menu");
    var y = document.getElementById("main");
    if (x.style.display === "none") {
        y.style.display ="none";
        x.style.display = "block";
    }else {
    x.style.display = "none";
    y.style.display ="block";
  }
}

//3.5
function changeBackgroundColor(){
    var x = document.getElementById("bc").value;
    document.body.style.backgroundColor = x;
}

//3.6
function showPost(){
    // Reset the page
    document.getElementById('posts').innerHTML = '';

    var number = document.getElementsByName("visible")[0].value;
    var count =  Math.min(number, allPosts.length);

    for (var i = 0; i < count; i++){
        document.getElementById("posts").appendChild(allPosts[i].date);
        document.getElementById("posts").appendChild(allPosts[i].content);
    }
}

//3.7
function addReply(index){

    showPost();
}

function deletePost(index){
    allPosts.splice(index, 1);
    // Remove options
    document.getElementsByTagName("select")[0].remove(index+1);
    showPost();
}

// if (search==i){
//             post.classList.add("reply");
//             allPosts.splice(search, 0 , postage);
//         }else{
//             allPosts.push(postage);
//         }

// Add options in drop down
