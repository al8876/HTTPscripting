var argv = process.argv.slice(2);

var url = argv.toString();

var https = require('https');

function getAndPrintHTML(url) {

var array = []
var hostURL = ''
var pathURL = ''

  var splitURL = function(url) {
    var array = url.split('/');
    console.log(array);
    var hostURL = array[0];
    var pathURL = ("/" + array[1]);
  }


  var requestOptions = {
    host: hostURL,
    path: pathURL
  }

  // https.get(requestOptions, function (response) {
  //   response.setEncoding('utf8');
  //   response.on('data', function(chunk) {
  //     for (var i = 0; i < chunk.length; i++) {
  //       // result.push(chunk[i]);
  //       // result += chunk.toString();
  //       result.push(chunk.toString(i));
  //       console.log(result);
  //     }
  //   });

  //   response.on('end', function() {
  //     console.log('Response stream complete');
  //   });
  // });
}

//   https.get(requestOptions, function (response) {
//     response.setEncoding('utf8');
//     response.on('data', function(chunk) {
//       console.log('n', chunk.toString());
//     });
//     response.on('end', function() {
//       console.log('Response stream complete.');
//     });
//   });
// }

getAndPrintHTML(url);