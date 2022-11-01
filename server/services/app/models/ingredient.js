'use strict';
const {
  Model
} = require('sequelize');
const itemingredient = require('./itemingredient');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ingredient.belongsToMany(models.Item, {
        through: "ItemIngredient",
        foreignKey: "ingredientId"
      })
    }
  }
  Ingredient.init({
    name: {
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Ingredient name is required'
        },
        notEmpty: {
          msg: 'Ingredient name is required'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};