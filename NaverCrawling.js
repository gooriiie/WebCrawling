var client = require('cheerio-httpcli');
var urlType = require('url');

var url = 'https://www.naver.com';
var param = {q : 'html'};

client.fetch(url, param, function(err, $, res){
    if(err){
        console.log(err);
        return;
    }
    
    console.log($('title').text());

    $('a').each(function(idx){
        console.log($(this).attr('href'));
    });
});