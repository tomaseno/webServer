const http = require("http");
const fs = require("fs");


function main(req, res){
    console.log(req.url);

    if(req.url == "/"){
        res.writeHead(200,{"Content-type": "text/html"});
        res.end(fs.readFileSync("index.html"));        
    }
    else if (req.url == "/style.css"){
        res.writeHead(200,{"Content-type": "text/css"});
        res.end(fs.readFileSync("style.css"));  
    }
    else if (req.url == "/script.js"){
        res.writeHead(200,{"Content-type": "text/javascript"});
        res.end(fs.readFileSync("script.js"));  
    }
    else if (req.url == "/test"){
        res.writeHead(200,{"Content-type": "application/json"});
        let obj = {};
        obj.appname= "my first service";
        obj.version = "0.0.0.1";
        obj.srvtime = new Date().toLocaleTimeString();
        res.end(JSON.stringify(obj));  
    }
   else{ // not found
        res.writeHead(404);
        res.end();
    }


}

let srv = http.createServer(main)
srv.listen(8080);

console.log("Server běží na http://localhost:8080 ...");