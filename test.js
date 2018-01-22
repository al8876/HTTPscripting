var argv = process.argv.slice(2);

var url = argv.toString();

var array = []
var hostURL = ''
var pathURL = ''

console.log(url);

var splitURL = function(url) {
  var array = url.split('/');
  console.log(array);
  var hostURL = array[0];
  var pathURL = ("/" + array[1]);
  console.log(hostURL);
  console.log(pathURL);
}

splitURL(url);