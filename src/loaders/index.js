// Se instancia el servidor
const expressServer = require("./server/expressServer");
const config = require("../config");
const logger = require("./logger");
const { sequelizeConnect } = require("./sequelize");

const startServer = async () => {
  await sequelizeConnect();
  logger.info(
    `╒════════════════════════════════════════╕
      │ ✔ DB loaded and connected successfully │
      ╘════════════════════════════════════════╛`
  );
  const server = new expressServer();
  logger.info(
    `╒════════════════════════════╕
      │ ✔ Express loaded correctly │
      ╘════════════════════════════╛`
  );

  await server.start();
  logger.info(
    `╒════════════════════════════════════════════╕
      │ ✔ Server running on http://localhost:${config.port}/ │
      ╘════════════════════════════════════════════╛`
  );
};

module.exports = startServer;
