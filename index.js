// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var dateInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filteredAddresses = addressData;

// Fill the empty table with data from addressData
function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < filteredAddresses.length; i++) {
      // Get get the current address object and its fields
      var address = filteredAddresses[i];
      var fields = Object.keys(address);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = address[field];
      }
    }
  }

  function handleSearchButtonClick() {
    // console.log(dateInput.value);
    // var filteredDate = dateInput.value.trim().toLowerCase();
    filteredAddresses = addressData.filter(function(address) {
    //   var addressState = address.state.toLowerCase();
    //   return addressState === filterState;
      var firstDate = dateInput.value.split('-');
      var secondDate = address.datetime.split('/');
      var firstDataObj = new Date(firstDate[0],
      firstDate[1] - 1, firstDate[2]);
      var secondDateObj = new Date(secondDate[2], secondDate[0] - 1, secondDate[1] );
      console.log(firstDataObj, secondDateObj);
      return firstDataObj.getTime() == secondDateObj.getTime();
    });

    renderTable();
    };

    function handleResetButtonClick() {
      filteredAddresses = addressData;
      $cityInput.value = '';
      dateInput.value = '';
      renderTable();
    };
  
  // Render the table for the first time on page load
  renderTable();
