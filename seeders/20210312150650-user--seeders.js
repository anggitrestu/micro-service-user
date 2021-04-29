'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'juarakoding@gmail.com',
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alkon Doe',
        profession: 'Front End Developer',
        role: 'student',
        email: 'alkon@gmail.com',
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
