var exec = require('child_process').exec;

exec(`open index.html`, function(error, stdout, stderr) {
	if (error) {
		console.log(`\nPlease open index.html in your browser.`);
	}
});