var http = require('http');

var server = http.createServer( function(req,res){
	
	var categoria = req.url;
	if(categoria =='/tecnologia'){
		res.end("<html><body>Noticias de tecnologia </body></html>");
	}else if(categoria =='/moda'){
		res.end("<html><body>Noticias de moda </body></html>");
	}else{
	res.end("<html><body>Portal de noticias </body></html>");
	}

});
try{
	server.listen(3000);
	console.log('Escutando na porta 3000');	
}catch(e){
	console.log('Erro ao escutar a porta 3000 =>'+e);
}


 