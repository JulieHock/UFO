// import the data from data.js
const tableData=data;
// Reference the HTML table using d3
var tbody=d3.select("tbody");

//create a new function to build the table
function buildTable(data) {
    //First, clear out any existing data
    tbody.html("");

    //Next, loop through each object in teh data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row=tbody.append("tr");

        //Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell=row.append("td");
            cell.text(val);
        }
        );
    });
}

//New function to create a filter button
function handleClick() {
    //Grab the datetime value from the filter
    let date=d3.select("#datetime").property("value");
    let filteredData= tableData;

    //Check to see if a date was entered and filter teh data using that date
    if (date) {
        //Apply 'filter' to the table data to only eep the rows where the 'datetime' value matches the filter value
        filteredData=filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data
    //@Note: if no date was entered, then filteredData will just be the original tableData
    buildTable(filteredData);
};

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);