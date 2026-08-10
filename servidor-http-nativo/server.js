const http = require('node:http');

const server = http.createServer();

const port = 3000;

server.on('request', (req, res) => {
    console.log('requisição recebida! Método ${req.method} e Rota: ${req.url}');
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("Servidor HTTP nativo Funcionando!");
});

server.listen(port, () => {
    console.log('Servidor escutantdo na porta ${port}');
});