const socket = io("http://localhost:3000", { transports: ["websocket"] });

const message = document.getElementById("message");
const messages = document.getElementById("messages");

// Enviar un nuevo mensaje a nuestro socket
const handleSubmitNewMessage = () => {
  socket.emit("message", { data: message.value });
  message.value = "";
};

// Escuchar si hay nuevos mensajes\
socket.on("message", ({ data }) => {
  handleNewMessage(data);
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  return li;
};
