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
    },
    {
      username: 'lollygagger',
      email: 'loll-pass@msn.com',
      password: 'password123'
    },
    {
      username: 'charitydays123',
      email: 'willwrk4u@aol.com',
      password: 'password123'
    },
    {
      username: 'simbarocks',
      email: 'samottis1984@hotmail.com',
      password: 'password123'
    },
    {
      username: 'jerad65',
      email: 'jerrie1965@gmail.com',
      password: 'password123'
    },
    {
      username: 'kahlanfisher',
      email: 'kfisher@max.com',
      password: 'password123'
    },
    {
      username: 'risingsun6689',
      email: 'jonharker@yahoo.com',
      password: 'password123'
    },
    {
      username: 'moodybeans',
      email: 'artie@ymail.com',
      password: 'password123'
    },
    {
      username: 'electronicbabe',
      email: 'amandaperkins@tsu.edu',
      password: 'password123'
    },
    {
      username: 'audiobass',
      email: 'audiobass-56@psu.edu',
      password: 'password123'
    }
  ];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;