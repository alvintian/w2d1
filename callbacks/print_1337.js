var getHTML = require('../http-functions');

var requestOptions = {
	host: 'sytantris.github.io',
	path: '/http-examples/step6/1337.html'
};

function printUpperCase(html) {
	html = html.replace(new RegExp('ck', 'g'), 'x');
	html = html.replace(new RegExp('er', 'g'), '0r');
	html = html.replace(new RegExp('you', 'g'), 'j00');
	while (html.includes("a") || html.includes("e") || html.includes("o") || html.includes("l")) {
		html = html.replace("e", 3);
		html = html.replace("a", 4);
		html = html.replace("o", 0);
		html = html.replace("l", 1);
		html = html.replace("s", 5);
		html = html.replace("t", 7);
	}
	console.log(html);
	//myArgs[i] = myArgs[i].replace(/a/g, 4);
}

getHTML(requestOptions, printUpperCase);