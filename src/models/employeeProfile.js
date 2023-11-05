"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EmployeeProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EmployeeProfile.belongsTo(models.User);
    }
  }
  EmployeeProfile.init(
    {
      CV: DataTypes.BLOB("medium"),
      introduce: DataTypes.TEXT,
      experience: DataTypes.TEXT,
      skill: DataTypes.TEXT,
      education: DataTypes.TEXT,
      certificate: DataTypes.TEXT,
      award: DataTypes.TEXT,
      project: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "EmployeeProfile",
    }
  );
  return EmployeeProfile;
};
