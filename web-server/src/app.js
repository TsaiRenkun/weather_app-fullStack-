const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//define paths for express config
const publicDicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup Handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup Static directory to serve
app.use(express.static(publicDicPath));

app.get("", (req, res) => {
    res.render("index", { title: "weather services", name: "Kun" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About page", name: "Kun" });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help services",
        message: "Helpful stuff",
        name: "Kun",
    });
});

app.get("", (req, res) => {
    res.send("<h1>Hello express</h1>");
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        res.send({
            error: "You must provide an address",
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send(error);
            } else {
                res.send({ forecast: forecastData, location: location, address: req.query.address });
            }
        });
    });
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        res.send({
            error: "You must provide a search term",
        });
    }

    console.log(req.query);
    res.send({
        products: [],
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404",
        errorMessage: "article not found",
        name: "Kun",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        errorMessage: "Page not found",
        name: "Kun",
    });
});

app.listen(3000, () => {
    console.log("working server");
});
