const { Server } = require("socket.io");

class Socket {
  static initiateSocket(server) {
    var io = new Server(server);
    io.on("connection", (socket) => {
      console.log("a user connected");
    });

    io.on("error", (error) => {
      console.log(error);
    });

    io.on("disconnect", () => {
      console.log("user disconnected");
    });
  }
}

module.exports = { Socket };
