const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_class_based', 'postgres', 'avanish123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,
});

sequelize.authenticate()
    .then(() => console.log('Database connected!'))
    .catch(err => console.log('Error: ', err));

module.exports = sequelize;
