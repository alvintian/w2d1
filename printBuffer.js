function getAndPrintHTML() {
	//const stream = require("stream");

	var https = require('https');
	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html'
	};

	/* Add your code here */
	var string = '';
	var callback = function(stream) {
		stream.on('data', function(buffer) {
			var part = buffer.toString();
			string += part;
					console.log('stream data ' + part);
		});
		// stream.on("data", function() {
		console.log('final output ' + string);
		// });
	}

	https.request(requestOptions, callback).end();
}


getAndPrintHTML();