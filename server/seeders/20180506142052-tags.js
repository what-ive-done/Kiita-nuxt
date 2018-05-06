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
   const tags = []
   const numberOfTags = 100
   for (let index = 0; index < numberOfTags; index++) {
     tags.push({
       name: faker.lorem.word()
     })
   }
   return queryInterface.bulkInsert('Tags', tags)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Tags', null, {})
  }
};

