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
    let filteredData = tableData;

//If there is a date already set, then use that date as a filter. If not, then return the default data
if (date) {
    filteredData = filterData.filter(row => row.datetime === date); 
};

// Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
;