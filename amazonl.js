const AmazonListScraper = require('amazon-list-scraper').default;
var fs = require("fs");
 
const scraper = new AmazonListScraper();
scraper.scrape('https://www.amazon.in/hz/wishlist/ls/M2WDIOK0ZIZA/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist')
  .then(items => {
    
    var file=items;
    console.log(items);
    
    fs.writeFile("./object.json", JSON.stringify(file), (err) => {
      if (err) {
          console.error(err);
          return;
      };
      console.log("File has been created");
  });
       
  })
  .catch(error => {
  });