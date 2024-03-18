const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the User model
const User = sequelize.define('User', {
  // id : {
  //   type: DataTypes.UUID,
  //   defaultValue: DataTypes.UUIDV4,
  //   primaryKey: true
  // },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    // defaultValue: 'WDJ' Will add a default vaulue if not inputted
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // email: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // password : {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
}, {
  // freezeTableName: true,
  // tableName: 'Employees'
  // timestamps: true,
  // createdAt: false,
  // updatedAt: 'UpdateTimestamp'
});

// Sync the model with the database SYNCING SOMETIMES FIXES ISSUES
sequelize.sync(); // Creates table if one does not exist already
// sequelize.sync({force: true}); // Creates table if one does not exist already and will drops it for dev purposes
// sequelize.sync({force: true, match: /_test$/}); // Creates table if database matches test in $regex


module.exports = User;
