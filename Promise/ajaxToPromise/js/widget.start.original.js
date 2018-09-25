//var xhr = new XMLHttpRequest();
//xhr.open('GET', '../data/employees.json');
//xhr.onreadystatechange = function () {
//  if(xhr.readyState === 4 && xhr.status === 200) {
//    var employees = JSON.parse(xhr.responseText);
//    var statusHTML = '<ul class="bulleted">';
//    for (var i=0; i<employees.length; i += 1) {
//      if (employees[i].inoffice === true) {
//        statusHTML += '<li class="in">';
//      } else {
//        statusHTML += '<li class="out">';
//      }
//      statusHTML += employees[i].name;
//      statusHTML += '</li>';
//    }
//    statusHTML += '</ul>';
//    document.getElementById('employeeList').innerHTML = statusHTML;
//  }
//};
//xhr.send();
//

// v1 generate seperate functions
var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/employees.json');
xhr.onreadystatechange = handleResponse;
xhr.send();

function handleResponse() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    addEmployeesToPage(employees);
  }
}

function generateUnorderedList(listItems) {
 return '<ul class="bulleted">'+listItems+'</ul>';
}


function generateListItems(employees) {
  var statusHTML = '';
  for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
  return statusHTML;
}

function addEmployeesToPage(addEmployees) {
  document.getElementById('employeeList').innerHTML = addEmployees;
}


// v2 applying promise
function getJSON() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/employees.json');
    xhr.onreadystatechange = handleResponse;
    xhr.onerror = function(error) { reject(error);};

    xhr.send();
    
    function handleResponse() {
    if(this.readyState === 4 && this.status === 200) {
      var employees = JSON.parse(this.responseText);
       resolve(employees);
      }
    }
  });                  
}


var newPromise = getJSON()
                  .then(generateListItems)
                  .then(generateUnorderedList)
                  .then(addEmployeesToPage)
                  .catch(function(e) {console.log(e);});
                  
  
