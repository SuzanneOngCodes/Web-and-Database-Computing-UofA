// 4.1
function getDateTask4_1() {

  // Create new AJAX request
  var xhttp = new XMLHttpRequest();

  // Define function that runs on response
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("P1").innerHTML = "This page was last viewed "+ this.responseText;
    }
  };

  // Open connection
  xhttp.open("GET", "/last.txt", true);

  // Send request
  xhttp.send();

}

//4.2
function getColors(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("header").innerHTML=this.responseText;
     document.getElementById("header").style.color=this.responseText;
    }
  };
  xhttp.open("GET", "/color.txt", true);
  xhttp.send();
}

//4.3
var dates = [];
function log() {
    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();
    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          // Parse the JSON and update the array
          dates = JSON.parse(this.responseText);
          updateDates();
          // Set timer
          setInterval(function(){ logRo(); }, 10000);
        }
    };
    // Open connection to server
    xmlhttp.open("GET", "/log.json", true);
    // Send request
    xmlhttp.send();
}

function logRo() {
    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON and update the array
            dates = JSON.parse(this.responseText);
            updateDates();
        }
    };
    // Open connection to server
    xmlhttp.open("GET", "/log-ro.json", true);
    // Send request
    xmlhttp.send();
}

function updateDates(){
  var ul = document.getElementsByTagName("ul")[0];
  ul.innerHTML= "";
  for (var i =0 ; i < dates.length; i++){
    let d1 = dates[i].date;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(d1));
    ul.appendChild(li);
  }
}

//4.4
function contact(){
  // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON and update the array
            dates = JSON.parse(this.responseText);
            updateDates();
        }
    };
    // Open connection to server
    xmlhttp.open("GET", "/log-ro.json", true);
    // Send request
    xmlhttp.send();
}
function search(){
  // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON and update the array
            dates = JSON.parse(this.responseText);
            updateDates();
        }
    };
    // Open connection to server
    xmlhttp.open("GET", "/log-ro.json", true);
    // Send request
    xmlhttp.send();
}
function about(){
  // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON and update the array
            dates = JSON.parse(this.responseText);
            updateDates();
        }
    };
    // Open connection to server
    xmlhttp.open("GET", "/log-ro.json", true);
    // Send request
    xmlhttp.send();
}

//4.5
function accept(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      acceptTC();
    }
  };
  xhttp.open("GET", "/accept", true);
  xhttp.send();
}

function acceptTC(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var header = document.getElementsByTagName('h1')[0];
      document.body.innerHTML = '';
      document.body.appendChild(header);
      document.body.innerHTML += this.responseText;
    }else{
      var para = document.createElement("p");
      para.innerHTML = "Accept T&C?";
      var but = document.createElement("button");
      but.onclick = function() {accept()};
      but.innerHTML = "Yes";
      header = document.getElementsByTagName('h1')[0];
      document.body.innerHTML = '';
      document.body.appendChild(header);
      document.body.appendChild(para);
      document.body.appendChild(but);
    }
  };
  xhttp.open("GET", "/content.ajax", true);
  xhttp.send();
}

//4.6
function dog(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.body.innerHTML="";
      var values = JSON.parse(this.responseText);
      var picture = document.createElement("img");
      picture.src = "/images/doggos/"+ values.uri;
      picture.alt = values.description;
      document.body.appendChild(picture);
      var p = document.createElement("p");
      p.innerHTML = values.description;
      document.body.appendChild(p);
      // Set timer
      setTimeout(function(){ dog(); }, 10000);
    }
  };
  xhttp.open("GET", "/images.json", true);
  xhttp.send();
}
