var client = require('cheerio-httpcli');

let url = 'https://gooriiie.github.io/posts/';
var param = {};

client.fetch(url, param, function(err, $, res, body){
    if(err){
        console.log(err);
        return;
    }
    
    $(".zoombtn").each(function(){
        console.log($(this).text());
    });
});
