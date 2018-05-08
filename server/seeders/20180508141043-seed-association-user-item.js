const faker = require('faker')

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    // User
    const fakeUsers = []
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
    fakeUsers.push(admin)
    fakeUsers.push(me)
    for (let index = 0; index < 10; index++) {
      const internet = faker.internet
      fakeUsers.push({
        email: internet.email(),
        username: internet.userName(),
        password: internet.password(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Users', fakeUsers, {})
    const users = await queryInterface.sequelize.query(`SELECT id from "Users";`);
    const usersRow = users[0]
    
    // Items
    const fakeItems = []
    const NumberOfItems = 30
    for (let index = 0; index < NumberOfItems; index++) {
      const randomUserIndex = Math.floor(Math.random() * usersRow)
      fakeItems.push({
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(),
        published: faker.random.boolean(),
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: usersRow[randomUserIndex]
      })
    }
    await queryInterface.bulkInsert('Items', fakeItems, {})
    const items = await queryInterface.sequelize.query(`SELECT id from "Items";`);
    const itemsRow = items[0]

    // Comments
    const fakeComments = []
    const NumberOfComments = 1000
    for (let index = 0; index < NumberOfComments; index++) {
      const randomUserIndex = Math.floor(Math.random() * usersRow)
      const randomItemIndex = Math.floor(Math.random() * itemsRow)
      fakeComments.push({
        body: faker.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: usersRow[randomUserIndex],
        ItemId: itemsRow[randomItemIndex],
      })
    }
    await queryInterface.bulkInsert('Comments', fakeComments, {})
    const comments = await queryInterface.sequelize.query(`SELECT id from "Comments";`);
    const commentsRow = comments[0]
    
    // Tags
    const fakeTags = []
    const NumberOfTags = 10
    for (let index = 0; index < NumberOfTags; index++) {
      fakeTags.push({
        name: faker.lorem.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
    await queryInterface.bulkInsert('Tags', fakeTags, {})
    const tags = await queryInterface.sequelize.query(`SELECT id from "Tags";`);
    const tagsRow = tags[0]

    // Items - Tags
    const fakeItemTags = []
    
    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    for (let index = 0; index < itemsRow.length; index++) {
      const randomTags = getRandom(tagsRow, Math.floor(Math.random() * 10))
      randomTags.forEach(({ id }) => {
        fakeItemTags.push({
          ItemId: itemsRow[index].id,
          TagId: id,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    }
    return queryInterface.bulkInsert('ItemTags', fakeItemTags, {})
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Items', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Tags', null, {});
    await queryInterface.bulkDelete('ItemTags', null, {});
  }
};
