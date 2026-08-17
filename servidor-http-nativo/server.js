const http = require('node:http');

const porta = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
});

server.listen(porta, ()=> {
    console.log(`Servidor ouvindo na porta ${porta}`);
});

console.log(new Date().toISOString());

//2) Explique, em suas palavras, o que aconteceria
//se a linha `res.end()` fosse removida do código.
//Teste essa hipótese executando o servidor sem
//essa linha e observe o comportamento no
//navegador.
// O que acontece é que a linha dizendo o status do servidor nao aparece mais. 