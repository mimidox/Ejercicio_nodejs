const http = require("http");

//Req, res; que es? el req me llegan los datos de el cliente, header, a partir de eso vamos a encontrar la data que nos envia
//res es para responder, como registrado correctamente

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});//Aqui imprimimos errores del tipo 200
//     res.end("¡Hola desde el servidor node.js!");
// });
// server.listen(3000, () => {
//     console.log("Servidor conectado en el puerto 3000");
// });
//Hasta aqui ya tenemos nuestro servidor backend
//Como levantamos la aplicacion? 
//---------------------------------------------------
// const server = http.createServer((req, res)=> {
//     console.log("Todo lo que llega del cliente: ", req.url);
//     console.log("Todo los req: ", req);
//     if(req.url == '/'){
//         res.end('Pagina de inicio');
//     }else if (req.url == '/contacto'){
//         res.end('Pagina de contacto');
//     }else{
//         res.writeHead(404);
//         res.end('Pagina no encontrada');
//     }
// })

// server.listen(3000, () => {
//     console.log("Servidor conectado en el puerto 3000");
// });


//Contenido html
// const server = http.createServer((resq, res)=>{
//     res.writeHead(200, {'content-type': 'text/html'}); //La '' es superior a la comilla doble ""
//     res.end(
//     `<!DOCTYPE html>
//     <html lang="es">
//         <head><title>252-web</title></head>
//         <body>
//             <h1>Bienvenido a 252-web</h1>
//             <p>Este es un servidor nodeJS con html</p>
//         </body>
//     </html>`
//     );
// })

// server.listen(3000, () => {
//     console.log("Servidor conectado en el puerto 3000");
// });

//---------------------------------------
//Nos creamos otro server para definir que metodo nos llega, get, post, put, delete
const server = http.createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'content-type': 'text/json'});
        const data ={
            "saludo":"Hola desde mi servidor te envio un JSON",
            "status":"succeess"
        }
        res.end(JSON.stringify(data));
    }else if (req.method === 'POST' && req.url === '/registro') {// el === y el == son diferentes, el primero compara el tipo de dato y el segundo no
        console.log("Datos recibidos de /registro", req.body); //salta undefined porque no estamos enviando nada
        res.end(JSON.stringify({mensaje: "Se creo correctamente"}));
    }else if (req.method === 'PUT' && req.url === '/actualizar'){
        res.end(JSON.stringify({mensaje: "Se actualizo correctamente"}));
    }else if (req.method === 'DELETE' && req.url === '/eliminar'){
        res.end(JSON.stringify({mensaje: "Se elimino correctamente"}));
    }else if (req.method === 'PATCH' && req.url === '/actualizar'){
        res.end(JSON.stringify({mensaje: "Se actualizo2 correctamente"}));
    }else{
        res.warn("Error de metodo o url");
    }

});

server.listen(3000, () => {
    console.log("Servidor conectado en el puerto 3000");
});