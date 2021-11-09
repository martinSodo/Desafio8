const { Server: HttpServer } = require('http')
const { Server: SocketServer } = require('socket.io')
const httpServer = new HttpServer(server)
const io = new SocketServer(httpServer)
const express = require('express');
const server = express();
const productRouter = require('./routers/product');
const { saveMessage, getMessages } = require('./models/messages');
server.use(express.static('public'))
server.use( express.json() );
server.use( express.urlencoded( { extended: true }) );
io.on('connection', async (socket) => {
  console.log(`New client connected | ID > ${socket.id}`)
  const messages = await getMessages()
  socket.emit('messages', messages)
  socket.on('new-message', async (message) => {
    console.log('new-message', message);
    await saveMessage(message)
    const messages = await getMessages()
    io.sockets.emit('messages', messages)
  })
})
///// Ruta Base ///// 
server.get('/', (req,res) => res.send({ data: Date.now() }))
///// Ruta de productos ///// 
server.use('/api/productos', productRouter);
///// seteo el puerto httpServer a 8081 ///// 
httpServer.listen(8081, () => 
  console.log(`Servidor abierto en el puerto N° > http://localhost:${8081}/`)
);
