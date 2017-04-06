$(document).ready(function(){
  
  $("#search").on("click", function(event) {
     event.preventDefault();
//     takes the  value in searchfield
var searchval = $("#searchfield").val();
 console.log("the input you entered is " + searchval);
var url = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+searchval+"&imlimit=20&utf8&format=json&profile=fuzzy&callback=?";
    //trying a different query
  var query =  "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchval+"&limit=10&namespace=0&format=json&callback=?";
     $("#resultHeading").html("");
     $(".description").html("");
   //making call to the url 
 $.getJSON(url,function(result){
  $("#resultHeading").html("Results");
  
 for(var i=0;i<10;i++){
// console.log(result.query.search[i].title);
   $(".description").append("<li><h2><a href='http://en.wikipedia.org/wiki/"+result.query.search[i].title+"' target='_blank'>"+ result.query.search[i].title + "</a></h2><p>" + result.query.search[i].snippet+ "</p></li>")
 }
});


/* using Ajax 
$.ajax
type: "GET",
url: searchURL,
if we  didn't add parameters in  url already
data: {
          "action": "opensearch",
          "format": "json",
          "limit": 5,
          
        }
        
dataType: "json",
success: showData,
error: function(errorMsg) {
console.log("Error");
}
});
   
function showData (data) {
  console.log("is it entering")
  console.log(data);
  */

    
  });
});
  


  






