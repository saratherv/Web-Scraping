var scraperjs = require('scraperjs');
var fs = require("fs");
var file;
scraperjs.StaticScraper.create('https://www.flipkart.com/search?q=tata%20sampann&marketplace=FLIPKART&otracker=start&as-show=on&as=off')
    .scrape(function($) {
        var x= $("._2cLu-l").map(function() {
            return $(this).text();
            
        }).get();
      return x;
    })
    .then(function(news) {
        console.log(news);
        file=news;
        fs.writeFile("./fkname.json", JSON.stringify(file), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
       
        
    })
    scraperjs.StaticScraper.create('https://www.flipkart.com/search?q=tata%20sampann&marketplace=FLIPKART&otracker=start&as-show=on&as=off')
    .scrape(function($) {
        var x= $("._1vC4OE").map(function() {
            return $(this).text();
            
        }).get();
      return x;
    })
    .then(function(news) {
        console.log(news);
        file=news;
        fs.writeFile("./fkprice.json", JSON.stringify(file), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
       
        
    })
    
    