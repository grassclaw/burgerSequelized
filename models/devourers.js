// Burger Eater Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
  var devourers = sequelize.define('devourers', {
    devourer_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // This does not need to be included, the hasOne() function in the burger model takes care of it
        // devourers.belongsTo(models.burgers);
      }
    }
  });
  return devourers;
};