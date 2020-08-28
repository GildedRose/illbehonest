const { Post } = require('../models');

// seed data for post here
const postdata = [
    {
      title: 'TITLE NAME HERE',
      post_url: 'WILL FIGURE OUT HOW TO ROUTE LINK INTERALLY THROUGH DB',
      user_id: 10
    }
  ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;