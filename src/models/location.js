"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsToMany(Company, { through: "Company_Location" });
    }
  }
  Location.init(
    {
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};
