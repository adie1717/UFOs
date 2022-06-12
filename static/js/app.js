// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Build table
function buildTable(data) {
    tbody.html("");
}
//Loop through each object in the data and appenda row and cells for each value in the row
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    //loop through each field in the dataRow and add each value as a table cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
});


function handleClick() {
    let date = d3.select("#datetime").property("value")};