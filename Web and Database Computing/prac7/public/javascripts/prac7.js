function add(){
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();
  // CANNOT use square brackets as the users cannot identify the title or content in the post
  let post =
      {
          title:document.getElementsByClassName("pure-input-1-2")[0].value,
          content:document.getElementsByClassName("pure-input-1-2")[1].value
      }
  ;
  // Open connection
  xhttp.open("POST", "/users/addpost", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(post));
}

var pos = [];
var original = document.getElementById("posts").innerHTML;

function show(){
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();

  // Define function that runs on response
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        pos = JSON.parse(this.responseText);
        document.getElementById("posts").innerHTML = original;
        for (let i = 0 ; i < pos.length ; i ++){
            let p = pos[i];
            console.log(JSON.stringify(p));
            var html = document.createElement("div");
            html.innerHTML = `<h2>${p.title}</h2><p>${p.content}</p>`;
            document.getElementById("posts").appendChild(html);
        }
    }
  };

  // Open connection
  // To get connections for query parameter
  xhttp.open("GET", "/users/getposts?n=", true);
  // Send request
  xhttp.send();
 }

 function showOne(){
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();

  // Open connection
  // To get connections for query parameter
  xhttp.open("GET", "/users/getposts/id/:n", true);
  // Send request
  xhttp.send();
 }

// 3.1
 function cookieMonster(){
   var xhttp = new XMLHttpRequest();
   xhttp.open("GET", "/cookies", true);
   xhttp.send();
 }