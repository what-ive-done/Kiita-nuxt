const faker = require('faker')

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const admin = {
      email: 'admin@example.com',
      username: 'admin',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const me = {
      email: 'pcjpcj2@gmail.com',
      username: 'changjoo-park',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const NumberOfUsers = 100
    const users = []
    for (let index = 0; index < NumberOfUsers; index++) {
      const internet = faker.internet
      users.push({
        email: internet.email(),
        username: internet.userName(),
        password: internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    return queryInterface.bulkInsert('Users', [
      admin, me, ...users
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
