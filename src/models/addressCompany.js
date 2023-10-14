"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address_Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Address_Company.init(
    {
      AddressId: DataTypes.INTEGER,
      CompanyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address_Company",
    }
  );
  return Address_Company;
};
