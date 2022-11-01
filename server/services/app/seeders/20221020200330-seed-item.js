'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let dataItems = require('../data/item.json')
    dataItems.forEach((el) => {
      delete el.id
      el.createdAt = new Date(),
      el.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Items', dataItems, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Items', null, {})
  }
};
