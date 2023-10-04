"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Locate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Locate.belongsToMany(models.Company, { through: "Company_Locate" });
    }
  }
  Locate.init(
    {
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Locate",
    }
  );
  return Locate;
};
