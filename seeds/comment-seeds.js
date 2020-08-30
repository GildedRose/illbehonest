const { Comment } = require('../models');

// seed data for comments here
const commentdata = [
    {
      comment_text: 'Nunc rhoncus dui vel sem.',
      user_id: 6,
      post_id: 1
    },
    {
      comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      user_id: 6,
      post_id: 8
    },
    {
      comment_text: 'Aliquam erat volutpat. In congue.',
      user_id: 3,
      post_id: 10
    },
    {
      comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      user_id: 3,
      post_id: 12
    },
    {
      comment_text: 'In hac habitasse platea dictumst.',
      user_id: 7,
      post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;

