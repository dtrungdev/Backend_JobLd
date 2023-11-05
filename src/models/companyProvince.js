"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company_Province.init(
    {
      companyId: DataTypes.INTEGER,
      provinceId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Company_Province",
    }
  );
  return Company_Province;
};
