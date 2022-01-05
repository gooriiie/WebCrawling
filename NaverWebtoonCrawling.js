var client = require('cheerio-httpcli');
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var fs = require('fs');


let url = 'https://comic.naver.com/webtoon/weekday.nhn';
var param = {};

client.fetch(url, param, function(err, $, res, body){
    var list = $(".list_area.daily_all .col.col_selected li");
    var savelist = [];

    list.each(function(){
        var value = $(this).find(".title").text();
        savelist.push(value);
        console.log(value);
    });
    exportToExcel(savelist);
});

function exportToExcel(list){
    var sheet = xlsx.makeNewSheet();
    sheet.name = "saveTest";
    sheet.setCell('b1','웹툰명');
   
    for (var i = 0 ; i < list.length ;i++){
      
      var value = list[i];
      sheet.setCell('a' + (i+2), (i+1));
      sheet.setCell('b' + (i+2), value);
    }

    var strm = fs.createWriteStream('D:/nodejsTest/saveTest.xlsx');
    xlsx.generate(strm);
   
  }