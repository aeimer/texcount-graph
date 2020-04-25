var express    = require("express");
var bodyParser = require("body-parser");
var app        = express();
const fs       = require('fs');

// CONFIG
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dbPath = 'data.json';

// APP
app.listen(3000, () => {
	fs.access(dbPath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
		if (err) {
			if (err.code === 'ENOENT') {
				fs.writeFileSync(dbPath, '[]');
				console.log(`Added file ${dbPath}`)
			} else {
				console.error(`${dbPath} is read-only`);
				exit(1);
			}
		} else {
			console.log(`${dbPath} exists, and it is writable`);
		}
		console.log("Server running on port 3000");
	});
});

// GET
app.get("/", (req, res) => {
	res.sendFile("./index.html", {root: __dirname});
});

app.get("/data", (req, res) => {
	fs.readFile("data.json", (err, data) => {
		if (err) throw err;

		res.send(JSON.parse(data));
	});
});

// POST
app.post("/commit", (req, res) => {
	var date  = new Date;
	var hash  = trim(req.body.hash);
	var count = parseInt(trim(req.body.count));

	fs.readFile(dbPath, function (err, data) {
		if (err) throw err;

	    var json = JSON.parse(data);
	    json.push({date, hash, count});

	    fs.writeFileSync(dbPath, JSON.stringify(json));
	});

	res.end("yes");
});
