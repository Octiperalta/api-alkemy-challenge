const { DataTypes } = require("sequelize");
const { sequelize } = require("../loaders/sequelize");

const User = sequelize.define(
  "user",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      // allowNull defaults to true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    role: {
      type: DataTypes.ENUM({
        values: ["USER_ROLE", "ADMIN_ROLE"],
      }),
      defaultValue: "USER_ROLE",
    },
  },
  {
    // Other model options go here
  }
);

module.exports = User;
