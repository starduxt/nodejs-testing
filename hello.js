const port = 8080;
var httpInstance = require("http");
var urlInstance = require("url");
var fileSystem = require("fs")

httpInstance.createServer(myCallBack).listen(port);
console.log("server is listening at port: " + port);

function myCallBack(request, response){
		var q = urlInstance.parse(request.url, true);
		console.log(q);
		console.log("Pathname: "+q.pathname);
		var file = "." + q.pathname + ".html"

		fileSystem.readFile(file, function(err, data){
			if(err){
				response.writeHead(404,{"content-type": "text/html"});
				return response.end("<h2>404 Page found:</h2>");
			}else{	
				response.writeHead(200,{"content-type": "text/html"});
				response.write(data);
				return response.end('<h2 style="{font-color:"green"}>200 Page found:</h2>  ');
			}
			
		});

		// var name = q.name;
		// var age = q.age;
		// response.write(request.url);
		// response.write('\n'+name +" and the age is "+age+"\n");	
		// response.end(" h ello worlddddd!");
		// console.log("log req url: " + request.url);
		
		
}

async function myCreateServer(){
	try{
		httpInstance.createServer(myCallBack).listen(port);
		console.log("server is listening at port: " + port);
	}catch(err){
		console.log("[Error]: " + err);
	}
}

// myCreateServer();

async function readFileFun(){
	try{
		var data = await fileSystem.readFile("file1", {encoding : "utf8"});
		console.log("[data]: "+ data)
	}catch(err){
		console.log(err)
	}
}

// readFileFun()