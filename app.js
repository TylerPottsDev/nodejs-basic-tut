const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	// res.sendFile(path.join(__dirname, "/views/home.html"));
	res.render("index", {
		title: "NodeJS"
	});
});

app.get("/about", (req, res) => {
	res.setHeader("Content-Type", "text/html");
	// res.sendFile(path.join(__dirname, "/views/home.html"));
	res.render("about", {
		title: "About"
	});
});

app.listen(3000, (e) => {
	if (e) throw e;
	console.log(`Server is running on port 3000`);
});