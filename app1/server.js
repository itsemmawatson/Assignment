const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(_dirname + '/dist'));

app.listern(process.env.PORT || 8080);

// PathLocalationStrategy

app.get('/*', function(req, res) {
	res.sendFile(path.join(_dirname + '/dist/index.html'));
})

console.log('The console is listening');