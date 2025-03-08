const { Server } = require("socket.io");

class Socket {
  static initiateSocket(server) {
    var io = new Server(server);
    io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}

module.exports = { Socket };
