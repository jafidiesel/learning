module.exports = (request, response) => {
    debugger;
    let url_splitted = request.url.split("/");
    if(request.url === "/"){
        if(request.method === 'GET'){
            console.log('GET');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('GET /');
        }else if(request.method === 'POST'){
            var data = '';
            request.on('data', (part) => {
                data += part;
                console.log('data',data);
            });
            console.log(`POST / ${data}`);
            request.on('end', (part) => {
    
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('Success POST');
            });
        }
    }else if(url_splitted[0] === "clientes"){
        if(request.method === 'GET'){
            console.log('GET');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('GET /clientes');
        }else if(request.method === 'POST'){
            var data = '';
            request.on('data', (part) => {
                data += part;
                console.log('data',data);
            });
            console.log(`POST /clientes ${data}`);
            request.on('end', (part) => {
    
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('Success POST');
            });
        }
    }else if(url_splitted[0] === "clientes" && !isNaN(url_splitted[1]) ){
        if(request.method === 'GET'){
            console.log('GET');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(`GET /clientes ${url_splitted[1]}`);
        }else if(request.method === 'POST'){
            var data = '';
            request.on('data', (part) => {
                data += part;
                console.log('data',data);
            });
            console.log(`POST /clientes ${url_splitted[1]}`);
            request.on('end', (part) => {
    
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end('Success POST');
            });
        }
    }
};