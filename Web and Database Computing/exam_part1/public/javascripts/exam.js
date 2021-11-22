// function show(){

//   //Create new AJAX request
//   var xhttp = new XMLHttpRequest();
//   var html = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
//   var n=document.getElementById("author").value;
//   // Define function that runs on response
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         html.innerHTML = "";
//         all = JSON.parse(this.responseText);
//         for (var i = 0 ; i < all.length ; i++)
//         {
//           let act = all[i];
//           // Insert a row at the end of table
//           var newRow = html.insertRow();
//           // Insert a cell at the end of the row
//           var newCell = newRow.insertCell();
//           // Insert a cell at the end of the row
//           var newCell2 = newRow.insertCell();
//           // Append a text node to the cell
//           var newTextFirst = `<img src="images/${act.image}" alt="None>"`;
//           var newTextLast = `<h1>${act.name}</h1><p>By ${act.author}</p><h1><b>$ ${act.price}<b></h1><h2>${act.genre}</h2><p>${act.cover}</p>`;
//           newCell.appendChild(newTextFirst);
//           newCell2.appendChild(newTextLast);
//         }
//     }
//   };
//   var str = "/show?name="+n.toString();
//   // Open connection
//   xhttp.open("GET", str, true);
//   // Send request
//   xhttp.send();
// }

var fil;

var vueinst = new Vue({
    el:"#app",
    data: {
      show_filter: false,
    },
    methods:{
      showFilter:function(){
        fil = this.show_filter;
      }
    }
});

function show() {

  vueinst.showFilter();
  // Create new AJAX request
  var xhttp = new XMLHttpRequest();
  var html = document.getElementsByTagName('table')[0].getElementsByTagName('tbody')[0];
  let filter ={};
  var priceOrder;
  if(fil==true){
    var x = document.getElementById("Descending").checked;
    console.log(x);
    if (x===true){
      priceOrder="DESC";
    }else{
      priceOrder="ASC";
    }

    filter =
    {
      name:document.getElementById("author").value,
      price: priceOrder,
      romance: document.getElementById("romance").checked,
      gaming: document.getElementById("gaming").checked,
      hist: document.getElementById("history").checked,
      hard: document.getElementById("hard").checked,
      soft: document.getElementById("soft").checked,
    };
  }else{
    filter =
    {
      name:document.getElementById("author").value,
      price: "ASC",
      romance: 1,
      gaming: 1,
      hist: 1,
      hard: 1,
      soft: 1,
    };
  }

  console.log(filter);

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      html.innerHTML = "";
        all = JSON.parse(this.responseText);
        for (var i = 0 ; i < all.length ; i++)
        {
          let act = all[i];
          // Insert a row at the end of table
          var newRow = html.insertRow();
          // Insert a cell at the end of the row
          var newCell = newRow.insertCell();
          // Insert a cell at the end of the row
          var newCell2 = newRow.insertCell();
          // Append a text node to the cell
          newCell.innerHTML = `<img src="/images/${act.image}" alt="None">`;
          var cover = (act.hard==1)?"Hard-covered":"Soft-covered";
          var genre ="";
          genre += (act.gaming==1)?"Gaming  ":"";
          genre += (act.hist==1)?"Romance  ":"";
          genre += (act.romance==1)?"History  ":"";
          newCell2.innerHTML = `<h1>${act.name}</h1><p>By ${act.author}</p><h1><b>$ ${act.price}</b></h1><h4>${genre}</h4><p>${cover}</p>`;
        }
    }
  };

  // Open connection
  xhttp.open("POST", "/show", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  // Send request
  xhttp.send(JSON.stringify(filter));
}