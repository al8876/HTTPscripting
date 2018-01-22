var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }

  https.get(requestOptions, function (response) {
    var result = ''
    response.setEncoding('utf8');
    response.on('data', function(data) {
      result += ('\n' + data.toString());
      console.log(result);
    });
    response.on('end', function() {
      console.log('Response stream complete');
    });
  });
}

getAndPrintHTML()