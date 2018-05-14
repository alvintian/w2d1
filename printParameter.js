function getAndPrintHTML(options) {

	// const options = new RequestOptions({
	//   method: RequestMethod.Post,
	//   url: 'https://google.com'
	// });

	/* Add your code here */
	var https = require('https');
	/* Add your code here */
	//	var string = '';
	var callback = function(stream) {
		stream.on('data', function(buffer) {
			var part = buffer.toString();
			console.log('stream data ' + part);
		});
	}
	// options = requestOptions;
	https.request(options, callback).end();
}

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);