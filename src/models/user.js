"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Group);
      User.belongsToMany(Job, { through: "Job_User" });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      fistname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.BLOB,
      password: DataTypes.STRING,
      groupId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
