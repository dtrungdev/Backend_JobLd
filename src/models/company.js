"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.belongsToMany(Location, { through: "Company_Location" });
      Company.hasMany(models.Job);
    }
  }
  Company.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      logo: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
