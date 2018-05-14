module.exports = function getHTML(options, callback) {
	var string = '';
	var https = require('https');
	var x = function(stream) {
		stream.on('data', function(buffer) {
			string += buffer.toString();
			callback('final output ' + string);
		});
	}
	https.request(options, x).end(); /* Your code here */
};
