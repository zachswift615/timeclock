$( "#clockin" ).bind( "click", function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {

    if(request.readyState === 4 && request.status === 200) {
      var alertMessage = request.responseText;
      document.getElementById("feedback").innerHTML = alertMessage;
    }
  };
  request.open('GET', 'http://localhost:5000/in');
  request.send();
});

$( "#clockout" ).bind( "click", function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {

    if(request.readyState === 4 && request.status === 200) {
      var alertMessage = request.responseText;
      document.getElementById("feedback").innerHTML = alertMessage;
    }
  };
  request.open('GET', 'http://localhost:5000/out');
  request.send();
});


$( "#list-entries" ).bind( "click", function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {

    if(request.readyState === 4 && request.status === 200) {
      var res = JSON.parse(request.responseText);
      myTable = document.getElementById("table");
      var entryRows = "<tr><td>in</td><td>out</td></tr>";
      for (var i=0; i<res.length; i++) {
        var myObj = res[i];
        console.log(myObj);
        var row = "<tr>" ;


        row += "<td>" + myObj.in + "</td>";
        row += "<td>" + myObj.out + "</td>";


        row += "</tr>";
        entryRows += row;

      }
      myTable.innerHTML = entryRows
    }
  };
  request.open('GET', 'http://localhost:5000/list_entries');
  request.send();
});