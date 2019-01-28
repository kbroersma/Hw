// from data.js
var tableData = data;

// YOUR CODE HERE!
//tables 
Var tbody= d3.select("body");


function buildTable(data){
    // loop through each row of Data 
    data.datarow.forEach(datarow)=> {
        var row = tbody.append("tr");
        object.values(datarow).forEach((val)=>{
            var cell =row.append("td");
            cell.text(val);
        }
        
    );
});
}

function handleClick (){
// refreshing the page 
d3.event.preventDefault();

var filter = {};.

var datetime = d3select("#datetime").property("value");
var state = d3select("#state").property("value");
var city = d3select("#city").property("value");
var duration= d3select("#duration").property("value");


let newData = tableData;

if (date) {

    newData= newData.filter(row => row.datetime === date);
}

}
if (state) {

    newData= newData.filter(row => row.datetime === state);
}
if (city) {

    newData= newData.filter(row => row.datetime === city);
  
}
if (duration) {

    newData= newData.filter(row => row.datetime === duration);
}
(d3.selectAllfunction) buildTable(newData);


 // Clearresults
 document.getElement("tbody").innerHTML = "";

d3.selectAll("#filter-btn").on("Click",handleClick);
