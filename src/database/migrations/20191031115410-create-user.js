export const up = (queryInterface, Sequelize) => queryInterface.createTable('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    allowNull: false,
    type: Sequelize.STRING
  },
  lastName: {
    allowNull: false,
    type: Sequelize.STRING
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING
  },
  availableBalance: {
    allowNull: false,
    type: Sequelize.DECIMAL
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

export const down = (queryInterface) => queryInterface.dropTable('Users');
