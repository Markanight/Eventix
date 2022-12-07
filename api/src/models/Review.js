const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING, 
      allowNull: false,
    },  
  });
};