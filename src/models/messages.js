const Contenedor = require('../../Contenedor');
const { sqliteOptions } = require('./databases');
const messageContenedor = new Contenedor(sqliteOptions,'messages');
///// Constante con datos a agregar /////
const messages = [
  { author: "Pepe", text: "Probando Pepe" },
  { author: "Jose", text: "Probando Argento" },
  { author: "Ricardo", text: "Probando Riky" },
  { author: "Fort", text: "Probando Fort" },
  { author: "Felfort", text: "Probando Felfolrt" },
  { author: "Homero", text: "Probando Homero" }
];
///// Mostramos los mensajes a todos /////
const getMessages = async () => {
  return await messageContenedor.getAll();
};
///// Guardamos mensaje por id /////
const saveMessage = async (message) => {
  const idMessage = await messageContenedor.save(message);
  return idMessage;
}

module.exports = {
  getMessages,
  saveMessage
};