var scraperjs = require('scraperjs');
var fs = require("fs");
scraperjs.StaticScraper.create('https://grofers.com/s/?q=tata+sampann&suggestion_type=0&t=1')
    .scrape(function($) {
        return $(".plp-product__name").map(function() {
            return $(this).text();
        }).get();
    })
    .then(function(news) {
        console.log(news);
        file=news;
        fs.writeFile("./gname.json", JSON.stringify(file), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
    })

    scraperjs.StaticScraper.create('https://grofers.com/s/?q=tata+sampann&suggestion_type=0&t=1')
    .scrape(function($) {
        return $(".plp-product__price--new").map(function() {
            return $(this).text();
        }).get();
    })
    .then(function(news) {
        console.log(news);
        file=news;
        fs.writeFile("./gprice.json", JSON.stringify(file), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
    })