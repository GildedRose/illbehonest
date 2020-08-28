const { User } = require('../models');

// seed data for user here
const userdata = [
    {
      username: 'yolo4589',
      email: 'youonly@nbc.ca',
      password: 'password123'
    },
    {
      username: 'twyla-rose',
      email: 'trose@aol.com',
      password: 'password123'
    },
    {
      username: 'jesterbetsyou',
      email: 'jesting@cbc.com',
      password: 'password123'
    },
    {
      username: '4theluvof1T',
      email: 'luvit@nasa.org',
      password: 'password123'
    },
    {
      username: 'tonedefqueen',
      email: 'ambleyhawk@tinyurl.com',
      password: 'password123'
    },
    {
      username: 'seasoningbee',
      email: 'seebethreetea@imdb.com',
      password: 'password123'
    }
  ];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;