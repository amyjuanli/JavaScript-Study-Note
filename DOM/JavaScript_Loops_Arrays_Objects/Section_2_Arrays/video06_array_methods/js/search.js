var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}


while(true) {
  search = prompt("Search for product in our store. Type 'list' to show all and 'quit' to exit");
  if(search === 'quit') {
    break;
  } else if (search === 'list') {
    print(inStock.join(', '));
  } else {
    if (inStock.indexOf(search) >= 0) {
      print(search+' is in our store');
    } else {
      print(search + ' is not in our store');
    }
  }
}
