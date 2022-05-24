// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
  
    username: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
  
    mobile_no: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
  
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    resume: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    role: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_verify: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_admin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    token: {
      type: DataTypes.STRING(255)
      
    },
    password_reset_code: {
      type: DataTypes.STRING(255)
     
    },
    last_ip: {
      type: DataTypes.STRING(30) 
     
    }
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return users;
};
