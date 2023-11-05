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
      User.hasOne(models.Allcode);
      User.belongsToMany(models.Job, { through: models.Job_User });
      User.hasOne(models.EmployeeProfile);
      User.belongsToMany(models.Company, { through: models.Company_User });
    }
  }
  User.init(
    {
      fullname: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthday: DataTypes.DATE,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.BLOB,
      cv: DataTypes.BLOB,
      RoleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
