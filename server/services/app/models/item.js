'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Category, { foreignKey : "categoryId" })
      // Item.hasMany(models.ItemIngredient, { foreignKey : "itemId" } )
      Item.belongsToMany(models.Ingredient, {
        through: "ItemIngredient",
        foreignKey: "itemId"
      })
    }
  }
  Item.init({
    name: {
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Item name is required'
        },
        notEmpty: {
          msg: 'Item name is required'
        }
      }
    },
    description: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Item description is required'
        },
        notEmpty: {
          msg: 'Item description is required'
        }
      }
    },
    price: {
      allowNull:false,
      type:DataTypes.INTEGER,
      validate: {
        notNull: {
          msg: 'Item price is required'
        },
        notEmpty: {
          msg: 'Item price is required'
        },
        min: {
          args: 1000,
          msg: 'Minimum item price is Rp.1000,-'
        }
      }
    },
    imgUrl: {
      allowNull:false,
      type:DataTypes.STRING,
      validate: {
        notNull: {
          msg: 'Item image is required'
        },
        notEmpty: {
          msg: 'Item image is required'
        }
      }
    },
    userMongoId: {
      type:DataTypes.STRING,
    }, 
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      onDelete:'cascade',
      onUpdate: 'cascade'
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};