export default (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    availableBalance: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, {});

  User.associate = () => {
  };
  return User;
};
