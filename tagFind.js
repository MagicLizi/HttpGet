/**
 * Created by lizi on 16/3/11.
 */
var http = require("http");
var cheerio = require("cheerio");
function download(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(null,data);
        });
    }).on("error", function(error) {
        callback(error,null);
    });
}

download("http://www.baidu.com",function(error,data)
{
    if (!error)
    {
        var $ = cheerio.load(data);
        $("a").each(function(i,content)
        {
            console.log(content.attribs.href);
        });
    }
    else
    {
        console.log(error);
    }
});
