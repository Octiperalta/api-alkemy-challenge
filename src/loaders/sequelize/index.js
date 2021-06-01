const { Sequelize } = require("sequelize");
const { database } = require("../../config");

const sequelize = new Sequelize(
  database.name,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
  }
);

const defineModels = () => {
  require("../../models/user");
};

const sequelizeConnect = async () => {
  try {
    await sequelize.authenticate();
    defineModels();
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    // await sequelize.sync();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sequelize,
  sequelizeConnect,
};
