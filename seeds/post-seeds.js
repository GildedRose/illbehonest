const { Post } = require('../models');

// seed data for post here
const postdata = [
    {
      title: 'Crazy Kool-Aid',
      post_url: 'http://imgur.com',
      user_id: 1
    },
    {
      title: 'Some Days are Matter Days',
      post_url: 'http://imgur.com',
      user_id: 3
    },
    {
      title: 'Piranha Plants DO Exist!',
      post_url: 'http://imgur.com',
      user_id: 2
    },
    {
      title: 'JAWS on these are MASSIVE',
      post_url: 'http://imgur.com',
      user_id: 5
    },
    {
      title: 'Too many peonies?',
      post_url: 'http://imgur.com',
      user_id: 11
    },
    {
      title: 'Numerologist Questioning It All',
      post_url: 'http://imgur.com',
      user_id: 8
    },
    {
      title: 'Cracking the Plants Code',
      post_url: 'http://imgur.com',
      user_id: 2
    },
    {
      title: 'Rancher Faux-Pas',
      post_url: 'http://imgur.com',
      user_id: 8
    },
    {
      title: 'Ginger by Day',
      post_url: 'http://imgur.com',
      user_id: 9
    },
    {
      title: 'PLANTS: What A Mistake!',
      post_url: 'http://imgur.com',
      user_id: 1
    },
    {
      title: 'RGB Keys Are Majestic',
      post_url: 'http://imgur.com',
      user_id: 10
    },
    {
      title: '365 Ways',
      post_url: 'http://imgur.com',
      user_id: 15
    }
  ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;