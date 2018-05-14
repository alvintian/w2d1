	function getHTML(options, callback) {
		var string = '';
		var https = require('https');
		var x = function(stream) {
			stream.on('data', function(buffer) {
				string += buffer.toString();
				callback('final output ' + string);
			});
		}
		https.request(options, x).end();
	}

	function printHTML(html) {
		console.log(html);
	}

	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step4.html'
	};
	getHTML(requestOptions, printHTML);