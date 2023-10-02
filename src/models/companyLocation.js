"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company_Location.init(
    {
      companyId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Company_Location",
    }
  );
  return Company_Location;
};
