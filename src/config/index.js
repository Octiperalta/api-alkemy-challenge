const dotenv = require("dotenv");
const envFound = dotenv.config(); // Variable para controlar que el .env haya sido encontrado

if (!envFound) {
  throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Exporto todos los datos sobre la configuracion del servidor
module.exports = {
  port: process.env.PORT,
  api: {
    prefix: "/api/v1",
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
  swagger: {
    path: "/api-documentation",
  },
  database: {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  auth: {
    secret: process.env.AUTH_SECRET,
    ttl: process.env.AUTH_TTL,
  },
};
